import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

const deleteLink = async (id) => {
  try {
    const { data } = await axios.delete('/.netlify/functions/deleteLink', {
      data: JSON.stringify({ id }),
    });

    return data;
  } catch (e) {
    console.log(e.message);
    throw new Error(e);
  }
};

const useDeleteLink = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteLink, {
    onSuccess: () => {
      queryClient.invalidateQueries('links');
    },
  });
};

export default useDeleteLink;
