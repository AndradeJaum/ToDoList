import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

interface CheckboxInputProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckboxTask = ({ checked, onChange }: CheckboxInputProps) => (
  <form>
    <div className="flex justify-center items-center ">
      <Checkbox.Root
        className="flex justify-center items-center w-5 h-5  border-solid border-2 border-blue_dark rounded-full duration-200 ease-in-out hover:border-blue"
        checked={checked}
        onCheckedChange={onChange}
        id="c1"
      >
        <Checkbox.Indicator className="flex items-center text-gray100 bg-purple_dark rounded-full border-solid border-2 border-purple_dark p-px">
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  </form>
);

export default CheckboxTask;
