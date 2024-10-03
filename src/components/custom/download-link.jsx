import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

/**
 * Renders a dropdown menu item that, when clicked, initiates a file download.
 *
 * @param {object} props - The component props.
 * @param {string} props.url - The URL of the file to be downloaded.
 * @param {string} [props.fileName] - The name of the downloaded file. If not provided, a default name will be used.
 * @returns {JSX.Element} - A dropdown menu item that triggers a file download when clicked.
 */
export const DownloadLink = ({ url, fileName }) => {
  // refer https://learnreactui.dev/contents/how-to-download-a-file-in-react
  const handleDownload = () => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName || 'downloaded-file';

        // Add the temporary link to the DOM to trigger the download.
        document.body.appendChild(link);

        // Trigger the download by clicking the link.
        link.click();

        // Remove the temporary link after the download is complete to avoid memory leaks.
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error('Error fetching the file:', error);
      });
  };

  return (
    <div>
      <DropdownMenuItem onClick={handleDownload}>
        <span>Download</span>
      </DropdownMenuItem>
    </div>
  );
};

export default DownloadLink;
