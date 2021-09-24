import 선언적랜더링 from './examples/01_선언적랜더링.svelte'
import 조건문 from './examples/02_조건문.svelte'
import 반복문 from './examples/03_반복문.svelte'
import 이벤트핸들링 from './examples/04_이벤트핸들링.svelte'
import 바인딩 from './examples/05_바인딩.svelte'
import 컴포넌트 from './examples/06_컴포넌트.svelte'
import 스토어 from './examples/07_스토어.svelte'
import TODO from './examples/08_Todo_예제_만들기.svelte'
import 라이프사이클 from './examples/09_라이프_사이클.svelte'
import TICK from './examples/10_tick.svelte'
import 라이프사이클모듈화 from './examples/11_라이프_사이클_모듈화.svelte'
import 기본보간 from './examples/12_기본_보간.svelte'
import 원시HTML from './examples/13_원시HTML.svelte'
import 디버그 from  './examples/14_디버그.svelte'
import 반응성할당 from  './examples/15_반응성_할당.svelte'
import 반응성구문 from  './examples/16_반응성_구문.svelte'
import 스타일속성바인딩 from  './examples/17_스타일속성바인딩.svelte'
import 스타일사용패턴 from  './examples/18_스타일_사용패턴.svelte'
import 스타일유효범위 from  './examples/19_스타일_유효범위_전역화.svelte'
import 일반요소바인딩 from  './examples/20_요소바인딩_일반요소.svelte'
import 입력요소바인딩 from  './examples/21_요소바인딩_입력요소.svelte'
import 편집가능요소바인딩 from  './examples/22_요소바인딩_편집가능요소.svelte'
import 조건블록 from  './examples/23_조건블록.svelte'
import 반복블록 from  './examples/24_반복블록.svelte'
import 반복블록사용패턴 from  './examples/25_반복블록_사용패턴.svelte'
import 키블록 from  './examples/26_키블록.svelte'
import 비동기블록 from  './examples/27_비동기블록.svelte'
import 사용자입력핸들링 from  './examples/28_사용자입력핸들링.svelte'
import 다중이벤트핸들링 from  './examples/29_다중이벤트핸들링.svelte'
import 이벤트수식어 from  './examples/30_이벤트수식어.svelte'
import 컴포넌트2 from  './examples/31_컴포넌트.svelte'
import Props from  './examples/32_Props.svelte'
import 양방향방인딩 from  './examples/33_양방향바인딩.svelte'
import EventDispatcher from  './examples/34_Event_Dispatcher.svelte'
import EventForwarding from  './examples/35_Event_Forwarding.svelte'
import ContextAPI from  './examples/36_Context_API.svelte'
import ModuleContext1 from  './examples/37_Module_Context1.svelte'
import ModuleContext2 from  './examples/38_Module_Context2.svelte'
import propsRestprops from  './examples/39_$$props_$$restProps.svelte'
import slot from  './examples/40_Slot.svelte'
import 단일슬롯과FallbackContent from  './examples/41_단일_슬롯과_Fallback_Content.svelte'
import 이름을가지는슬롯 from  './examples/42_이름을_가지는_슬롯.svelte'
import 범위를가지는슬롯1 from './examples/43_범위를_가지는_슬롯1.svelte'
import 범위를가지는슬롯2 from './examples/44_범위를_가지는_슬롯2.svelte'
import 슬롯포워딩 from './examples/45_슬롯_포워딩.svelte'
import 슬롯변수 from './examples/46_$$slots.svelte'
import 스토어2 from './examples/47_스토어.svelte'
import 쓰기가능스토어1 from './examples/48_쓰기_가능_스토어1.svelte'
import 쓰기가능스토어2 from './examples/49_쓰기_가능_스토어2.svelte'
import 읽기가능스토어 from './examples/50_읽기_전용_스토어.svelte'
import 계산된스토어 from './examples/51_계산된_스토어.svelte'
import 스토어값얻기 from './examples/52_스토어_값얻기.svelte'
import 액션1 from './examples/53_액션1.svelte'
import 액션2 from './examples/54_액션2.svelte'
import self from './examples/55_특별한요소_self.svelte'
import 콤포넌트 from './examples/56_특별한요소_component.svelte'
import 윈도우 from './examples/57_특별한요소_window.svelte'
import headbody from './examples/58_특별한요소_head_body.svelte'
import options from './examples/59_특별한요소_options.svelte'
import options_accesor from './examples/60_특별한요소_options_accessors.svelte'
import tweened from './examples/61_애니메이션_tweened.svelte'
import router from './examples/62_svelte-spa-router.svelte'
import 전후처리기 from './examples/63_전_후_처리기(svelte-preprocess).svelte'
import unittest_jest from './examples/64_Unit_Test_Jest.svelte'
import webtestrunner from './examples/65_Web_Test_Runner.svelte'
import devtools from './examples/66_Svelte_Devtools.svelte'
import 투두예제2 from './examples/67_Todo_예제_불필요한리렌더링방지.svelte'
import 투두예제3 from './examples/68_Todo_Virtual_list.svelte'
import 투두예제4 from './examples/69_Todo_Test_example/TodoList.svelte'
import 여행앱 from './examples/70_Unit_Test_예제_여행준비물앱/App.svelte'

const routes = {
  '/1': 선언적랜더링,
  '/2': 조건문,
  '/3': 반복문,
  '/4': 이벤트핸들링,
  '/5': 바인딩,
  '/6': 컴포넌트,
  '/7': 스토어,
  '/8': TODO,
  '/9': 라이프사이클,
  '/10': TICK,
  '/11': 라이프사이클모듈화,
  '/12': 기본보간,
  '/13': 원시HTML,
  '/14': 디버그,
  '/15': 반응성할당,
  '/16': 반응성구문,
  '/17': 스타일속성바인딩,
  '/18': 스타일사용패턴,
  '/19': 스타일유효범위,
  '/20': 일반요소바인딩,
  '/21': 입력요소바인딩,
  '/22': 편집가능요소바인딩,
  '/23': 조건블록,
  '/24': 반복블록,
  '/25': 반복블록사용패턴,
  '/26': 키블록,
  '/27': 비동기블록,
  '/28': 사용자입력핸들링,
  '/29': 다중이벤트핸들링,
  '/30': 이벤트수식어,
  '/31': 컴포넌트2,
  '/32': Props,
  '/33': 양방향방인딩,
  '/34': EventDispatcher,
  '/35': EventForwarding,
  '/36': ContextAPI,
  '/37': ModuleContext1,
  '/38': ModuleContext2,
  '/39': propsRestprops,
  '/40': slot,
  '/41': 단일슬롯과FallbackContent,
  '/42': 이름을가지는슬롯,
  '/43': 범위를가지는슬롯1,
  '/44': 범위를가지는슬롯2,
  '/45': 슬롯포워딩,
  '/46': 슬롯변수,
  '/47': 스토어2,
  '/48': 쓰기가능스토어1,
  '/49': 쓰기가능스토어2,
  '/50': 읽기가능스토어,
  '/51': 계산된스토어,
  '/52': 스토어값얻기,
  '/53': 액션1,
  '/54': 액션2,
  '/55': self,
  '/56': 콤포넌트,
  '/57': 윈도우,
  '/58': headbody,
  '/59': options,
  '/60': options_accesor,
  '/61': tweened,
  '/62': router,
  '/63': 전후처리기,
  '/64': unittest_jest,
  '/65': webtestrunner,
  '/66': devtools,
  '/67': 투두예제2,
  '/68': 투두예제3,
  '/69': 투두예제4,
  '/70': 여행앱,
}

export default routes
