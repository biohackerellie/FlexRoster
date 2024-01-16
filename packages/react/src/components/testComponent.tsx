import { useClassroomStore } from '@/lib/shared/stores';
import type { Classrooms } from '@/lib/shared/services';
import { classQuery } from '@/lib/shared/services';
import { useQuery } from '@tanstack/react-query';

export default function TestComponent() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['classrooms'],
    queryFn: classQuery,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <h1>Hello World</h1>
      {data.map((classroom: Classrooms) => (
        <div key={classroom.id}>{classroom.roomNumber}</div>
      ))}
    </>
  );
}
