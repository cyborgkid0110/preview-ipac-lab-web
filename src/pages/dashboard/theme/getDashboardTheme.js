import { getDesignTokens } from './themePrimitives';
import {
  buttonsCustomizations,
  dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
  inputsCustomizations,
  layoutComponentsCustomizations,
  menuComponentsCustomizations,
  otherComponentsCustomizations,
} from './customizations';

export default function getDashboardTheme(mode) {
  return {
    ...getDesignTokens(mode),
    components: {
      ...buttonsCustomizations,
      ...dataGridCustomizations,
      ...datePickersCustomizations,
      ...treeViewCustomizations,
      ...inputsCustomizations,
      ...layoutComponentsCustomizations,
      ...menuComponentsCustomizations,
      ...otherComponentsCustomizations,
    },
  };
}
