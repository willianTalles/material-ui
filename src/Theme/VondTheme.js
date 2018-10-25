import { createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import yellow from '@material-ui/core/colors/yellow';
import red from '@material-ui/core/colors/red';

export const vondTheme = createMuiTheme({
  palette: {
    primary: { main: '#ff6600'},
    secondary: { main: '#ffa80d'},
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 0,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  status: {
    danger: 'orange',
  },
});