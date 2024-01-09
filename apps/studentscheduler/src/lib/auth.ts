import type { NextAuthOptions } from 'next-auth';

import AzureADProvider from 'next-auth/providers/azure-ad';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from './db';
import { CustomUser, Role } from './types';

import {
  User,
} from 'next-auth';


// declare module 'next-auth' {
//   interface Session {
//     user: {
//       id: string;
//       email: string;
//     };
//     roles: Role;
//   }
//   interface CustomUser extends User {
//     id: string;
//     role: Role;
//     email: string;
//   }
// }

// export type { Session } from 'next-auth';

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
	adapter: PrismaAdapter(prisma),
  providers: [
    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID as string,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET as string,
      tenantId: process.env.AZURE_AD_TENANT_ID,
      //@ts-expect-error
      authorizationUrl: `https://login.microsoftonline.com/${process.env.AZURE_AD_TENANT_ID}/oauth2/v2.0/authorize`,
			async authorize(credentials: {email: string}) {
				const user = await prisma.user.findFirst({
					where: {
						email: credentials.email
					}
				});
				if (user) {
					return {
						id: user.id,
						name: user.name,
						email: user.email,
						role: user.role,
						image: user.image
					}
				} else {
				return null;
			}
		},
		async profile(profile){
			return {
				...profile,
				id: profile.oid,
				email: profile.email,
				name: profile.name,
				role: profile.roles[0] as Role
			}
		}
    }
		),
  ],
	

  callbacks: {

		jwt: async ({ token, account}) => {
			if (account?.id_token) {
				const [header, payload, sig] = account.id_token.split('.');
				const idToken = JSON.parse(
					Buffer.from(payload, 'base64').toString('utf8')
				);

				token.roles = idToken.roles;
			}
			return token
		},

		session: async ({ session, user, token }) => {

			session.roles = token.roles[0] as Role;
			return session;
		},

    async redirect({ url, baseUrl }) {
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  pages: {
    signIn: '/login',
  },
	debug: true
} satisfies NextAuthOptions;
