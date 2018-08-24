import { StackNavigator } from 'react-navigation';

import ActivityIndicatorPage from './pages/ActivityIndicator.page';
import ButtonPage from './pages/button.page';
import ModalPage from './pages/modal.page';
import IndexPage from './pages/index.page';
import PickerPage from './pages/picker.page';
import ScrollViewPage from './pages/scrollview.page';
import SliderPage from './pages/slider.page';
import StatusBarPage from './pages/statusbar.page';
import WebViewPage from './pages/webview.page';

const AppCtrl = StackNavigator({
  Index: { screen: IndexPage },
  ac: { screen: ActivityIndicatorPage },
  bu: { screen: ButtonPage },
  mo: { screen: ModalPage },
  pi: { screen: PickerPage },
  sc: { screen: ScrollViewPage },
  sl: { screen: SliderPage },
  st: { screen: StatusBarPage },
  we: { screen: WebViewPage },
});

export default AppCtrl;
