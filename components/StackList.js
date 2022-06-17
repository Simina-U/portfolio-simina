import { RiRadioButtonFill } from "react-icons/ri";

export default function StackList({ stackList }) {
  const stackAsArray = stackList.split(",");
  return (
    <div className="grid grid-cols-3 md:grid-cols-1">
      {stackAsArray.length &&
        stackAsArray.map((elem, i) => {
          return (
            <p className="text-gray-600 py-2 flex items-center" key={i}>
              <RiRadioButtonFill className="pr-1" />
              {elem}
            </p>
          );
        })}
    </div>
  );
}
