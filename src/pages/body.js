import { BodyProvider } from '@/context/bodyContext/body-provider';
import BodyScreen from '@/features/body/sacreens/body-screen';

const body = () => {
  return (
    <BodyProvider>
      <BodyScreen />;
    </BodyProvider>
  );
};

export default body;
