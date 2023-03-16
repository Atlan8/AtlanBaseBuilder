import type { ExtractPropTypes, PropType } from "vue";
import type { AssembleInfo } from "./service";

export type AssembleInfoProps = {
  props: Readonly<ExtractPropTypes<{
    info: {
      type: PropType<AssembleInfo>;
      required: true;
    };
    isForm: {
      type: BooleanConstructor;
      default: boolean;
    };
  }>>,
  emit: (event: "confirm", ...args: any[]) => void
}