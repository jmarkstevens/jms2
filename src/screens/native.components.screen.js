import { createStackNavigator } from 'react-navigation';

import ActivityIndicatorPage from '../components/nativeComponents/ActivityIndicator.page';
import ButtonPage from '../components/nativeComponents/button.page';
import ModalPage from '../components/nativeComponents/modal.page';
import IndexPage from '../components/nativeComponents/index.page';
import PickerPage from '../components/nativeComponents/picker.page';
import ScrollViewPage from '../components/nativeComponents/scrollview.page';
import SliderPage from '../components/nativeComponents/slider.page';
import StatusBarPage from '../components/nativeComponents/statusbar.page';
import WebViewPage from '../components/nativeComponents/webview.page';

const NativeComponents = createStackNavigator({
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

export default NativeComponents;
