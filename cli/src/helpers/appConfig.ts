import path from "path";
import * as p from "@clack/prompts";
import chalk from "chalk";
import fs from "fs-extra";
import ora from "ora";
import { PKG_ROOT, REPO_ROOT } from "src/constants";

import {
  excludedTeachers,
  isRedisCluster,
  preferredNames,
  secretaries,
  semesterClassName,
} from "@local/config";

const configFilePath = path.join(REPO_ROOT, "/packages/config/src/index.ts");

type PreferredNames = {
  givenName: string;
  preferredName: string;
};

interface AppConfiguration {
  secretaries: string[];
  preferredNames: PreferredNames[];
  excludedTeachers: string[];
  semesterClassName: string;
  isRedisCluster: boolean;
}

/**
 * cli function checks if the config file exists and if it does not, it creates it. it is a config file of typescript constants.
 */

export function updateConfiguration(args: string[]) {
  let existingData: AppConfiguration = {
    secretaries: secretaries,
    preferredNames: preferredNames,
    excludedTeachers: excludedTeachers,
    semesterClassName: semesterClassName,
    isRedisCluster: isRedisCluster,
  };
}
