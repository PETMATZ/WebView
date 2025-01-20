import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WebViewContainer from '../components/WebViewContainer';

const MainScreen = () => {
	return (
		<SafeAreaView style={{ flex: 1 }} edges={['top']}>
			<StatusBar barStyle={'dark-content'} backgroundColor={'#ffffff'} />
			<WebViewContainer />
		</SafeAreaView>
	);
};

export default MainScreen;
