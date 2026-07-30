export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (err) {
    console.warn('Navigator clipboard API failed, trying execCommand fallback', err);
  }

  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch (err) {
    console.error('Fallback copy command failed:', err);
    return false;
  }
};

export const getProjectShareUrl = (projectId: string, liveUrl?: string): string => {
  if (typeof window === 'undefined') return '';
  const baseUrl = `${window.location.origin}${window.location.pathname}`;
  return `${baseUrl}?project=${encodeURIComponent(projectId)}`;
};
