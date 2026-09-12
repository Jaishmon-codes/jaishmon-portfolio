import { useEffect } from 'react';

interface ShortcutOptions {
  key: string;
  ctrlOrMeta?: boolean;
  callback: (e: KeyboardEvent) => void;
  ignoreInputs?: boolean;
}

export const useKeyboardShortcut = ({
  key,
  ctrlOrMeta = false,
  callback,
  ignoreInputs = true,
}: ShortcutOptions) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // If ignoreInputs is enabled, ignore when user is typing in input or textarea
      if (ignoreInputs) {
        const target = event.target as HTMLElement;
        const isInputField =
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable;
        if (isInputField && event.key !== 'Escape') {
          return;
        }
      }

      const isKeyMatch = event.key.toLowerCase() === key.toLowerCase();
      const isModifierMatch = ctrlOrMeta ? event.ctrlKey || event.metaKey : true;

      if (isKeyMatch && isModifierMatch) {
        event.preventDefault();
        callback(event);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, ctrlOrMeta, callback, ignoreInputs]);
};
