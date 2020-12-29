import { useQuery } from 'react-query';
import axios from 'axios';

const fetchLinks = async () => {
  try {
    const {
      data: {
        allLinks: { data: links },
      },
    } = await axios.get('/.netlify/functions/get_links');

    return links;
  } catch (e) {
    console.error(e.message);
  }
};

const useFetchLinks = () => {
  return useQuery('links', fetchLinks);
};

export default useFetchLinks;
