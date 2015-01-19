angular.module('Tearoom6Module', [])
       .controller('AppCtrl', function AppCtrl($scope) {
  /* アプリケーションメタ */
  // Android
  $scope.androidApps = [
    { // Breakthrough
      name: 'Breakthrough',
      description: 'パネルが光った順を記憶して、その順番にパネルをなぞる簡単なゲームです。',
      url: 'https://play.google.com/store/apps/details?id=jp.tearoom6.MemoryTouch',
      image: 'https://lh5.ggpht.com/at6OFqrL1a-T2AVpLkizrxfEnoTrumjrlfKIjwTLfYkrCSXyH-7ueZqX99k2BBJtheU=w300-rw'
    }
  ];
  // iOS
  $scope.iOSApps = [];
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
    }
  };
});