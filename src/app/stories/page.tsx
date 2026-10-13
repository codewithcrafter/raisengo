import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Success Stories | Raise India Foundation',
  description: 'True stories of children and families healed through Mission Little Heartbeats and empowered by Raise India Foundation.',
};

export default function StoriesPage() {
  redirect('/success-stories');
}
