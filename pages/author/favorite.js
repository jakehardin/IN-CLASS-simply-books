import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/named
import { getFavAuthors } from '../../api/authorData';
import AuthorCard from '../../components/AuthorCard';
import { useAuth } from '../../utils/context/authContext';

export default function FavoriteAuthors() {
  const { user } = useAuth();
  const [authors, setAuthors] = useState([]);

  const getFavoriteAuthors = () => {
    getFavAuthors(user.uid).then(setAuthors);
  };
  useEffect(() => {
    getFavoriteAuthors();
  }, []);

  return (
    <div>{authors.map((author) => (
      <AuthorCard key={author.firebaseKey} authorObj={author} onUpdate={getFavoriteAuthors} />
    ))}
    </div>
  );
}
