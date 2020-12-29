import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const archiveLink = async (args) => {
  try {
    const { data } = await axios.put(
      '/.netlify/functions/updateLink',
      JSON.stringify({ id: args.id, ...args, archived: true })
    );

    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const useArchiveLink = () => {
  const queryClient = useQueryClient();
  return useMutation(archiveLink, {
    onSuccess: () => {
      queryClient.invalidateQueries('links');
    },
  });
};

export default useArchiveLink;
