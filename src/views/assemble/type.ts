import type { ExtractPropTypes, PropType } from 'vue';
import type { AssembleInfo } from './service';

/**
 * 详情组件的hooks传参
 */
export type AssembleInfoProps = {
  props: Readonly<
    ExtractPropTypes<{
      info: {
        type: PropType<AssembleInfo>;
        required: true;
      };
      isForm: {
        type: BooleanConstructor;
        default: boolean;
      };
    }>
  >;
  emit: (event: 'confirm', ...args: any[]) => void;
};
