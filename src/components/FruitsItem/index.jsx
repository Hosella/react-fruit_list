import useStore from "../../store/useStore";
import './style.scss'

export const FruitsItem = ({ fruit }) => {
  const { fruitsData, action } = useStore();

  return (
    <div 
    className="FruitsItem"
    onClick={() => action(fruit)}
    style={fruitsData.includes(fruit) ? {border: '2px solid royalblue', backgroundColor: 'lightblue'} : {}}
    >
      {fruit}
    </div>
  );
}