import {Button} from '../Shared'

export const Banner = (props) => {
  return (
    <div id="banner" className={"w-full py-6 " + props.extraClasses}>
      {props.children}
    </div>
  );
};
