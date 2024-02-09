'use client';

import axios from 'axios';
import * as React from 'react';
import { toast } from 'sonner';
import { Button } from '../ui/button';

interface ChatInputProps {
  chatPartner: string;
  chatId: string;
}

const ChatInput: React.FC<ChatInputProps> = ({ chatPartner, chatId }) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [input, setInput] = React.useState<string>('');

  return <></>;
};
