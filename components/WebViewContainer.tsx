import { useEffect, useRef, useState } from 'react';
import { Alert, BackHandler } from 'react-native';
import WebView, { WebViewNavigation } from 'react-native-webview';

const WebViewContainer = () => {
	const webViewRef = useRef<WebView>(null);
	const [canGoBack, setCanGoBack] = useState(false);

	const handleBackPress = () => {
		if (canGoBack && webViewRef.current) {
			webViewRef.current.goBack();
			return true;
		}

		Alert.alert('종료', '앱을 종료하시겠습니까?', [
			{ text: '취소', style: 'cancel' },
			{ text: '종료', onPress: () => BackHandler.exitApp() },
		]);
		return true;
	};

	useEffect(() => {
		BackHandler.addEventListener('hardwareBackPress', handleBackPress);

		return () => {
			BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
		};
	}, [canGoBack]);

	const onNavigationStateChange = (navState: WebViewNavigation) => {
		setCanGoBack(navState.canGoBack);
	};

	return (
		<WebView
			ref={webViewRef}
			source={{ uri: 'https://petmatz-fe.vercel.app' }}
			javaScriptEnabled={true}
			domStorageEnabled={true}
			style={{ flex: 1 }}
			onNavigationStateChange={onNavigationStateChange}
		/>
	);
};

export default WebViewContainer;
