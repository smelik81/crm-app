//import StatusLabel, { Status } from './components/status-label';
import AddCompanyButton from './components/add-company-button';
import MagicButton from './components/magic-buttom';

export default function Home() {
  return (
    <main>
      <h1 className="text-lg">Home Page</h1>
      {/* <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel> */}
      <AddCompanyButton />
      <MagicButton />
    </main>
  );
}
