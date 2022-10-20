import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { forwardRef } from "react";
import { CalenderIcon } from "./Svgs";

const CustomInput = forwardRef((props: any, ref: any) => {
  return (
    <InputGroup pt='0.5'>
      <Input
        px='2'
        variant='flushed'
        ref={ref}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        // rounded='xl'
      />
      <InputRightElement>
        <IconButton
          variant='ghost'
          aria-label=''
          size='xs'
          onClick={props.onClick}
          // bgColor='lavender'
          rounded='7px'>
          <CalenderIcon />
        </IconButton>
      </InputRightElement>
    </InputGroup>
  );
});

CustomInput.displayName = "CustomInput";

export default CustomInput;
