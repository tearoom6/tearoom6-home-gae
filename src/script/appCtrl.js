angular.module('Tearoom6Module', [])
       .controller('AppCtrl', function AppCtrl($scope) {
  /* アプリケーションメタ */
  // Android
  $scope.androidApps = [
    { // Breakthrough
      name: 'Breakthrough',
      description: 'パネルが光った順を記憶して、その順番にパネルをなぞる簡単なゲームです。',
      url: 'https://play.google.com/store/apps/details?id=jp.tearoom6.MemoryTouch',
      image: 'https://lh5.ggpht.com/at6OFqrL1a-T2AVpLkizrxfEnoTrumjrlfKIjwTLfYkrCSXyH-7ueZqX99k2BBJtheU=w300-rw',
      buttonText: 'このゲームで遊ぶ'
    }
  ];
  // iOS
  $scope.iOSApps = [
    { // Breakthrough
      name: 'Breakthrough',
      description: 'パネルが光った順を記憶して、その順番にパネルをなぞる簡単なゲームです。',
      url: 'https://itunes.apple.com/jp/app/memory-game-breakthrough/id978414951',
      image: 'http://a5.mzstatic.com/jp/r30/Purple3/v4/7f/e4/f3/7fe4f330-f79a-d626-5385-9488715c72e1/icon175x175.jpeg',
      buttonText: 'このゲームで遊ぶ'
    }
  ];
  // Chrome
  $scope.chromeApps = [
    { // Quick Drive
      name: 'Quick Drive',
      description: 'Google Driveへの簡易アクセスを提供するChrome拡張機能です。',
      url: 'https://chrome.google.com/webstore/detail/quick-drive/aijfbconiilhjgfljolkoiaockgenpgn?utm_source=chrome-ntp-icon',
      image: '../img/icon_quick_drive.png',
      buttonText: 'このアプリを使う'
    }
  ];
  // デフォルト
  $scope.active = 'android';
  $scope.apps = $scope.androidApps;
  
  /* ボタンの状態 */
  $scope.isButtonActive = function(type) {
    return $scope.active == type;
  };
  
  /* ボタンを押した時の処理 */
  $scope.listApps = function(type) {
    if (type == 'android') {
      $scope.active = 'android';
      $scope.apps = $scope.androidApps;
    } else if (type == 'ios') {
      $scope.active = 'ios';
      $scope.apps = $scope.iOSApps;
    } else if (type == 'chrome') {
      $scope.active = 'chrome';
      $scope.apps = $scope.chromeApps;
    }
  };
});