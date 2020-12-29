import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const createLink = async (args) => {
  try {
    const { data } = await axios.post(
      '/.netlify/functions/createLink',
      JSON.stringify({ ...args })
    );

    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const useCreateLink = () => {
  const queryClient = useQueryClient();
  return useMutation(createLink, {
    onSuccess: () => {
      queryClient.invalidateQueries('links');
    },
  });
};

export default useCreateLink;
