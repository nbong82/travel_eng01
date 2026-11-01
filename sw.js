// 실전 여행영어 전용 캐시 이름
const CACHE_NAME = 'travel-en-cache-v1';

// 오프라인 구동을 위한 필수 파일 목록
const urlsToCache = [
  './',
  './index.html',
  './data.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// 서비스 워커 설치 시 파일 캐싱
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('실전 여행영어 캐시 생성 완료');
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// 기존 구버전 캐시 정리
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('구버전 캐시 삭제:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 네트워크 요청 시 캐시 우선 반환 (오프라인 지원)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});