import { fruits } from '../../utils/fruits';
import { FruitsItem } from '../FruitsItem';

export const FruitsList = () => {
  return (
    <div>
      {fruits.map((fruit) => (
        <FruitsItem  fruit={fruit} />
      ))}
    </div>
  );
}