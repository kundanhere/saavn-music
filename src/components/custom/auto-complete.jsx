import { ReactSearchAutocomplete } from 'react-search-suggestion-own';

const AutoComplete = () => {
  const styles = {
    hoverBackgroundColor: 'hsl(var(--muted))',
    color: 'hsl(var(--accent-foreground))',
    fontFamily: 'Geist, sans-serif',
    lineColor: 'hsl(var(--input))',
  };

  // note: the id field is mandatory
  const items = [
    {
      id: 0,
      name: 'Cobol',
    },
    {
      id: 1,
      name: 'JavaScript',
    },
    {
      id: 2,
      name: 'Basic',
    },
    {
      id: 3,
      name: 'PHP',
    },
    {
      id: 4,
      name: 'Java',
    },
  ];

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log('Focused');
  };

  return (
    <ReactSearchAutocomplete
      items={items}
      styling={styles}
      onSearch={handleOnSearch}
      onHover={handleOnHover}
      onSelect={handleOnSelect}
      onFocus={handleOnFocus}
      placeholder="Search by artists, songs, or albums"
      className="file-styles search !h-fit w-full"
      showIcon={true}
      autoFocus
    />
  );
};

export default AutoComplete;
