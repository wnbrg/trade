"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[79169],{975630:(t,e,s)=>{s.d(e,{LineToolAnchoredVWAP:()=>W});var r=s(650151),i=s(526075),n=s(389137),o=s(401580),a=s(244842),l=s(173948),u=s(855611),d=s(223284),c=s(354950),p=s.n(c),h=s(827523),y=s(311862),_=s(291784),S=s(31712),P=s(932167);class m extends P.StudyPriceAxisView{_showPaneLabel(){return!1}_showAxisLabel(){const t=this._model.properties().childs().scalesProperties.childs();return this._visible()&&"VWAP"===this._data.plotIndex&&t.showStudyLastValue.value()}_visible(){const t=this._source.properties().childs().styles.childs()[this._data.plotIndex].childs().display.value();return this._source.properties().childs().axisLabelVisible.value()&&Boolean(4&t)}}var I=s(342308),g=s(329007),f=s(86441),b=s(29399);class w extends b.StudyPlotPaneView{constructor(t,e,s,r){super(t,e,s,r),this._line=t}_updateImplFull(){if(super._updateImplFull(!0),window.TradingView.printing||!this._line.hasAlert.value()||this._model.readOnly()||this._model.isInReplay())return!1;const t=this._items;if(!this._renderer.isEmpty()&&t.length>0){const e=t[t.length-1],s=this._model.timeScale().width();if(e.x<0||t[0].x>s)return!1;const r=Math.min(s-5,e.x);let i=e.y;if(e.x>r){let s=t.length-2;for(;s>=0;){const n=t[s];if(n.x<=r){const t=(r-n.x)/(e.x-n.x);i=n.y+(e.y-n.y)*t;break}s-=1}}const n=new f.Point(r,i);return this._renderer.append(new I.PaneRendererClockIcon({points:[n],color:this._line.getAlertIsActive()?this._lineColor:g.Constants.DrawingIconColor,horzMargin:-16})),!0}return!1}_updateImplLight(){this._updateImplFull()}}var v=s(201089),x=s(853965),A=s(552698),T=s(1584),D=s(461794),C=s(964824),V=s(806960),M=s(742391);const L=(0,v.getLogger)("Chart.AnchoredVWAP"),F=(0,h.studyIdString)("AnchoredVWAP","tv-basicstudies");function R(t,e,s,i){return"calculate_stDev"in(0,r.ensureDefined)(t.inputs)||void 0===i.inputs.find((t=>"calculate_stDev"===t.id))||((0,r.ensureDefined)(e.inputs).calculate_stDev=!1),e.styles&&(B(e.styles.VWAP),B(e.styles.UpperBand),B(e.styles.LowerBand),B(e.styles.UpperBand_2),B(e.styles.LowerBand_2),B(e.styles.UpperBand_3),B(e.styles.LowerBand_3)),e}function B(t){void 0!==t&&void 0!==t.visible&&(t.display=t.visible?15:0,delete t.visible)}class W extends V.StudyLineDataSourceWithPlots{constructor(t,e,s,i,n){s=s||(0,r.ensureNotNull)(t.studyMetaInfoRepository().findByIdSync({type:"java",studyId:F}));const o=null!=e?e:W.createProperties(t);super(t,s,"anchoredvwap",o,i,n);const[a,l,u,d,c,p,h]=this.metaInfo().plots,y=t.mainSeries(),_=[new w(this,y,t,a.id)];l&&u&&(_.push(new b.StudyPlotPaneView(this,y,t,l.id)),_.push(new b.StudyPlotPaneView(this,y,t,u.id))),d&&c&&p&&h&&(_.push(new b.StudyPlotPaneView(this,y,t,d.id)),_.push(new b.StudyPlotPaneView(this,y,t,c.id)),_.push(new b.StudyPlotPaneView(this,y,t,p.id)),_.push(new b.StudyPlotPaneView(this,y,t,h.id))),this._properties.childs().areaBackground&&_.splice(0,0,new T.AreaBackgroundPaneView(this,t)),this._priceAxisViews=this.metaInfo().plots.map((t=>new m(this,{plotIndex:t.id}))),
_.push(...this._priceAxisViews.map((t=>new M.PanePriceAxisView(t,this,this._model)))),this._anchorPriceCalculated=!1,this._onInputsReadyCallbacks=[],this._setPaneViews(_),t.properties().childs().scalesProperties.childs().showStudyLastValue.subscribe(this,this._onShowStudyLastValueChanged),o.onRestoreFactoryDefaults().subscribe(this,this._onRestoreFactoryDefaults)}destroy(){this.properties().onRestoreFactoryDefaults().unsubscribeAll(this),this.model().properties().childs().scalesProperties.childs().showStudyLastValue.unsubscribeAll(this),this._onInputsReadyCallbacks=[],super.destroy()}canHasAlert(){return!0}pointsCount(){return 1}updateAllViews(t){super.updateAllViews(t),this._priceAxisViews.forEach((e=>e.update(t)))}firstValue(){return this._model.mainSeries().firstValue()}priceRange(t,e){if(!this._isReady()||this.isSourceHidden())return null;const s=this.plots().minMaxOnRangeCached(t,e,[{name:this.metaInfo().plots[0].id,offset:0}]);if(null===s)return null;const i=(0,r.ensureNotNull)(this.priceScale());return i.isLog()?new _.PriceRange(i.priceToLogical(s.min),i.priceToLogical(s.max)):new _.PriceRange(s.min,s.max)}isIncludedInAutoScale(){return!0}restoreData(t){super.restoreData(t),void 0!==t.data&&(this._anchorPriceCalculated=!0)}properties(){return super.properties()}sourceId(){return this._studyId()}hasStateForAlert(){return a.enabled("alerts")&&null!==this._inputs}alertCreationAvailable(){return new o.WatchedValue(!this.hasAlert.value()&&this.hasStateForAlert()).readonly()}stateForAlert(){const t=this.metaInfo(),e=(0,d.plotsForAlert)(t,this.offset.bind(this),["VWAP"]),s=(0,d.collectDepsForAlert)([this],this.id()),r=s.idForAlert,i=s.studyDependencies,n=s.inputsForAlert,o=(this.priceScale()||this.model().mainSeries().priceScale()).formatter(),a=o?u.FormattersSerializer.serialize(o):null;return{id:r,uniqueId:r,type:A.StateForAlertType.StudyLineTool,title:(0,D.clean)(this.translatedType(),!0),shortTitle:(0,D.clean)(this.translatedType(),!0),shortDescription:(0,D.clean)(t.shortDescription||"Study",!0),interval:this._model.mainSeries().interval(),fullId:t.fullId,isTVScript:Boolean(t.isTVScript),isTVScriptStrategy:Boolean(t.isTVScriptStrategy),isTVLibrary:Boolean(t.isTVLibrary),hasAlertFunction:Boolean(t.hasAlertFunction),plots:e,inputs:n,alerts:t.alerts,scriptIdPart:t.scriptIdPart,scriptVersion:t.pine?t.pine.version:"-1",callStudyDependencies:(0,l.formatCallstudyArg)((0,d.dependenciesForAlerts)([],this._model.studyMetaInfoRepository())),studyDependencies:i,formatter:a}}inputsForAlertState(){null===this._inputs&&L.logError("Could not get inputsForAlertState if VWAP has no inputs");const{start_time:t,source:e}=this.inputs();return{start_time:t,source:e}}inputs(){return(0,r.ensureNotNull)(this._inputs)}idForAlert(){return(0,d.collectDepsForAlert)([this],this.id()).idForAlert}defaultPlotIdForAlert(){return this.metaInfo().plots[0].id}static createProperties(t,e){const s=i.StudyMetaInfo.getStudyPropertyRootNameById(F),o=(0,r.ensureNotNull)(t.studyMetaInfoRepository().findByIdSync({type:"java",studyId:F})),a=(0,
x.createDefaultsState)(!0,s,[],t.studyVersioning());return this.createPropertiesFromStudyMetaInfoAndState(o,o,(0,n.merge)((0,n.clone)(a),null!=e?e:{}),t.studyVersioning())}static studyId(){return F}static createPropertiesFromStudyMetaInfoAndState(t,e,s,r){const i=(0,y.prepareStudyPropertiesForLoadChart)(t,e,s,r,R);return this._configureProperties(i),i}_onPointsetUpdated(t){super._onPointsetUpdated(t),this._onStudyInputsMayChange()}_studyInputs(t){(0,r.assert)(1===t.length,"all the line tool points should be defined");const e=t[0],s=this._getPointTime(e,!1);return null===s?(this._subscribeApplyInputsOnSeriesCompleted(),null):{...this.properties().childs().inputs.state(["start_time"]),start_time:1e3*s}}_isReady(){return super._isReady()&&(null!==this._inputs||this._anchorPriceCalculated)&&this.model().lineBeingEdited()!==this}_onDataCleared(){super._onDataCleared(),this._anchorPriceCalculated=!1}_onInputsChanged(){if(super._onInputsChanged(),null!==this._inputs){for(const t of this._onInputsReadyCallbacks)try{t(this._inputs)}catch(t){L.logError(t.stack||t.message)}this._onInputsReadyCallbacks=[]}}async _getPropertyDefinitionsViewModelClass(){return(await Promise.all([s.e(33038),s.e(15913),s.e(25900),s.e(56386),s.e(18537)]).then(s.bind(s,865993))).AnchoredVWAPDefinitionsViewModel}_updateAnchorsPrice(t){if(!t&&(this._anchorPriceCalculated||!this.isActualSymbol()))return;const e=this.firstValue(),s=this.points();if(null===e||0===s.length)return;const r=s[0].index,i=this.plots().valueAt(r);if(null===i)return;const n=i[1];null!=n&&(this._points[0].price=n,this._timePoint[0].price=n,this._anchorPriceCalculated=!0)}_synchronizeAlert(t){this._onInputsReady((()=>super._synchronizeAlert(t)))}static _configureProperties(t){super._configureProperties(t),t.hasChild("axisLabelVisible")||t.addChild("axisLabelVisible",new(p())(true));const e=t.childs().styles.childs().VWAP.childs().linewidth,s=t.childs().styles.childs().VWAP.childs().color;t.addChild("linesWidths",new S.LineToolWidthsProperty([e])),t.addChild("linesColors",new S.LineToolColorsProperty([s]))}_onInputsReady(t){null!==this._inputs?t(this._inputs):this._onInputsReadyCallbacks.push(t)}_onShowStudyLastValueChanged(){this._priceAxisViews.forEach((t=>t.update((0,C.sourceChangeEvent)(this.id())))),this.model().updateSource(this)}_onRestoreFactoryDefaults(){this.properties().childs().axisLabelVisible.setValue(true)}}},928890:(t,e,s)=>{s.d(e,{LineToolFixedRangeVolumeProfile:()=>p});var r=s(650151),i=s(224153),n=s(526075),o=s(817724),a=s(827523),l=s(853965),u=s(389137),d=s(311862);const c=(0,a.studyIdString)("VbPFixed","tv-basicstudies");class p extends i.LineToolVbPFixed{constructor(t,e,s,r,i){const n=s||t.studyMetaInfoRepository().findByIdSync({type:"java",studyId:c});super(t,e,n,r,i)}calcIsActualSymbol(){o.StudyLineDataSource.prototype.calcIsActualSymbol.apply(this)}boundToSymbol(){return!0}isSynchronizable(){return this.priceScale()===this._model.mainSeries().priceScale()}static studyId(){return c}static createProperties(t,e){
const s=n.StudyMetaInfo.getStudyPropertyRootNameById(c),i=(0,r.ensureNotNull)(t.studyMetaInfoRepository().findByIdSync({type:"java",studyId:c})),o=(0,l.createDefaultsState)(!0,s,[],t.studyVersioning());return this.createPropertiesFromStudyMetaInfoAndState(i,i,(0,u.merge)((0,u.clone)(o),null!=e?e:{}),t.studyVersioning())}static createPropertiesFromStudyMetaInfoAndState(t,e,s,r){const i=(0,d.prepareStudyPropertiesForLoadChart)(t,e,s,r);return this._configureProperties(i),i}}},855353:(t,e,s)=>{s.d(e,{LineToolStudyStatusView:()=>i});var r=s(833642);class i extends r.StatusView{constructor(t){super(t.statusProvider({}))}getSplitTitle(){return this._statusProvider.getSplitTitle()}}},484775:(t,e,s)=>{s.r(e),s.d(e,{LineStudyMtpAnalysis:()=>p,LineStudyMtpDecisionPoint:()=>y,LineStudyMtpDownWave1OrA:()=>A,LineStudyMtpDownWave2OrB:()=>D,LineStudyMtpDownWave3:()=>V,LineStudyMtpDownWave4:()=>L,LineStudyMtpDownWave5:()=>R,LineStudyMtpDownWaveC:()=>W,LineStudyMtpElliotWaveMain:()=>I,LineStudyMtpElliotWaveMajor:()=>f,LineStudyMtpElliotWaveMinor:()=>w,LineStudyMtpRiskReward:()=>S,LineStudyMtpUpWave1OrA:()=>E,LineStudyMtpUpWave2OrB:()=>k,LineStudyMtpUpWave3:()=>z,LineStudyMtpUpWave4:()=>j,LineStudyMtpUpWave5:()=>q,LineStudyMtpUpWaveC:()=>X});var r=s(650151),i=s(827523),n=s(582533),o=s(817724),a=s(943994),l=s(311862);function u(t){return(0,i.studyIdString)(t,"mtp-mtpredictor")}class d extends o.StudyLineDataSource{constructor(t,e,s,r,i,o){const l=u(r),c=s||t.studyMetaInfoRepository().findByIdSync({type:"java",studyId:l}),p=e||d._createPropertiesFromStudyMetaInfo(c,t.studyVersioning());super(t,c,r,p,i,o),this._formatter=new a.VolumeFormatter,(0,n.createGraphicsPaneViews)(this,t).then(this._setPaneViews.bind(this))}formatter(){return this._formatter}static _createPropertiesFromMtpStudyShortIdAndState(t,e){return super._createPropertiesFromStudyIdAndState(u(t),e)}static _createPropertiesFromStudyMetaInfo(t,e){const s=(0,l.prepareStudyProperties)(t,{},null,e,[]);return super._configureProperties(s),s}}const c="mtp_tsanalysis";class p extends d{constructor(t,e,s,r,i){super(t,e,s,c,r,i)}pointsCount(){return 1}static createProperties(t){return super._createPropertiesFromMtpStudyShortIdAndState(c,t)}static studyId(){return u(c)}_studyInputs(t){(0,r.assert)(1===t.length,"all the line tool points should be defined");const e=this._getPointTime(t[0],!0);return null===e?(this._subscribeApplyInputsOnSeriesCompleted(),null):{...this.properties().childs().inputs.state(),bar:1e3*e}}}const h="mtp_decisionpoint";class y extends d{constructor(t,e,s,r,i){super(t,e,s,h,r,i),this._symbolIntervalChanged=!1,this._model.mainSeries().onSymbolIntervalChanged().subscribe(this,this._onSymbolIntervalChanged)}destroy(){this._model.mainSeries().onSymbolIntervalChanged().unsubscribeAll(this),super.destroy()}pointsCount(){return 1}onData(t){super.onData(t),this._symbolIntervalChanged=!1}static createProperties(t){return super._createPropertiesFromMtpStudyShortIdAndState(h,t)}static studyId(){return u(h)}_studyInputs(t){(0,
r.assert)(1===t.length,"all the line tool points should be defined");const e=this._getPointTime(t[0],!0);return null===e?(this._subscribeApplyInputsOnSeriesCompleted(),null):{...this.properties().childs().inputs.state(),symbolIntervalChanged:this._symbolIntervalChanged,bar:1e3*e}}_onSymbolIntervalChanged(){this._symbolIntervalChanged=!0}}const _="mtp_riskreward";class S extends d{constructor(t,e,s,r,i){super(t,e,s,_,r,i)}pointsCount(){return 3}static createProperties(t){return super._createPropertiesFromMtpStudyShortIdAndState(_,t)}static getTooltipText(t){return t&&0!==t._points.length?1===t._points.length?"Select Stop Bar":2===t._points.length?"Select Target Point":null:"Select Entry Setup Bar"}static studyId(){return u(_)}_studyInputs(t){(0,r.assert)(3===t.length,"all the line tool points should be defined");const e=this._getPointTime(t[0],!0),s=this._getPointTime(t[1],!0),i=this._getPointTime(t[2],!0);return null===e||null===s||null===i?(this._subscribeApplyInputsOnSeriesCompleted(),null):{...this.properties().childs().inputs.state(),entry_bar:1e3*e,stop_bar:1e3*s,target_bar:1e3*i,target_price:t[2].price}}}class P extends d{pointsCount(){return 1}_studyInputs(t){(0,r.assert)(1===t.length,"all the line tool points should be defined");const e=this._getPointTime(t[0],!0);return null===e?(this._subscribeApplyInputsOnSeriesCompleted(),null):{...this.properties().childs().inputs.state(),bar:1e3*e}}}const m="mtp_ew_main";class I extends P{constructor(t,e,s,r,i){super(t,e,s,m,r,i)}static createProperties(t){return super._createPropertiesFromMtpStudyShortIdAndState(m,t)}static studyId(){return u(m)}}const g="mtp_ew_major";class f extends P{constructor(t,e,s,r,i){super(t,e,s,g,r,i)}static createProperties(t){return super._createPropertiesFromMtpStudyShortIdAndState(g,t)}static studyId(){return u(g)}}const b="mtp_ew_minor";class w extends P{constructor(t,e,s,r,i){super(t,e,s,b,r,i)}static createProperties(t){return super._createPropertiesFromMtpStudyShortIdAndState(b,t)}static studyId(){return u(b)}}class v extends d{_studyInputs(t){(0,r.assert)(t.length===this.pointsCount(),"all the line tool points should be defined");const e={...this.properties().childs().inputs.state()};for(let s=0;s<this.pointsCount();++s){const r=this._getPointTime(t[s],!0);if(null===r)return this._subscribeApplyInputsOnSeriesCompleted(),null;e[`bar${s}`]=1e3*r}return e}}const x="mtp_wpt_down1ora";class A extends v{constructor(t,e,s,r,i){super(t,e,s,x,r,i)}pointsCount(){return 2}static createProperties(t){return super._createPropertiesFromMtpStudyShortIdAndState(x,t)}static getTooltipText(t){return`Down Wave 1 or A: Select Point ${(t?t._points.length:0)+1}`}static studyId(){return u(x)}}const T="mtp_wpt_down2orb";class D extends v{constructor(t,e,s,r,i){super(t,e,s,T,r,i)}pointsCount(){return 2}static createProperties(t){return super._createPropertiesFromMtpStudyShortIdAndState(T,t)}static getTooltipText(t){return`Down Wave 2 or B: Select Point ${(t?t._points.length:0)+1}`}static studyId(){return u(T)}}const C="mtp_wpt_down3";class V extends v{
constructor(t,e,s,r,i){super(t,e,s,C,r,i)}pointsCount(){return 3}static createProperties(t){return super._createPropertiesFromMtpStudyShortIdAndState(C,t)}static getTooltipText(t){return`Down Wave 3: Select Point ${(t?t._points.length:0)+1}`}static studyId(){return u(C)}}const M="mtp_wpt_down4";class L extends v{constructor(t,e,s,r,i){super(t,e,s,M,r,i)}pointsCount(){return 2}static createProperties(t){return super._createPropertiesFromMtpStudyShortIdAndState(M,t)}static getTooltipText(t){return`Down Wave 4: Select Point ${(t?t._points.length:0)+1}`}static studyId(){return u(M)}}const F="mtp_wpt_down5";class R extends v{constructor(t,e,s,r,i){super(t,e,s,F,r,i)}pointsCount(){return 5}static createProperties(t){return super._createPropertiesFromMtpStudyShortIdAndState(F,t)}static getTooltipText(t){return`Down Wave 5: Select Point ${(t?t._points.length:0)+1}`}static studyId(){return u(F)}}const B="mtp_wpt_downc";class W extends v{constructor(t,e,s,r,i){super(t,e,s,B,r,i)}pointsCount(){return 3}static createProperties(t){return super._createPropertiesFromMtpStudyShortIdAndState(B,t)}static getTooltipText(t){return`Down Wave C: Select Point ${(t?t._points.length:0)+1}`}static studyId(){return u(B)}}const N="mtp_wpt_up1ora";class E extends v{constructor(t,e,s,r,i){super(t,e,s,N,r,i)}pointsCount(){return 2}static createProperties(t){return super._createPropertiesFromMtpStudyShortIdAndState(N,t)}static getTooltipText(t){return`Up Wave 1 or A: Select Point ${(t?t._points.length:0)+1}`}static studyId(){return u(N)}}const U="mtp_wpt_up2orb";class k extends v{constructor(t,e,s,r,i){super(t,e,s,U,r,i)}pointsCount(){return 2}static createProperties(t){return super._createPropertiesFromMtpStudyShortIdAndState(U,t)}static getTooltipText(t){return`Up Wave 2 or B: Select Point ${(t?t._points.length:0)+1}`}static studyId(){return u(U)}}const O="mtp_wpt_up3";class z extends v{constructor(t,e,s,r,i){super(t,e,s,O,r,i)}pointsCount(){return 3}static createProperties(t){return super._createPropertiesFromMtpStudyShortIdAndState(O,t)}static getTooltipText(t){return`Up Wave 3: Select Point ${(t?t._points.length:0)+1}`}static studyId(){return u(O)}}const $="mtp_wpt_up4";class j extends v{constructor(t,e,s,r,i){super(t,e,s,$,r,i)}pointsCount(){return 2}static createProperties(t){return super._createPropertiesFromMtpStudyShortIdAndState($,t)}static getTooltipText(t){return`Up Wave 4: Select Point ${(t?t._points.length:0)+1}`}static studyId(){return u($)}}const H="mtp_wpt_up5";class q extends v{constructor(t,e,s,r,i){super(t,e,s,H,r,i)}pointsCount(){return 5}static createProperties(t){return super._createPropertiesFromMtpStudyShortIdAndState(H,t)}static getTooltipText(t){return`Up Wave 5: Select Point ${(t?t._points.length:0)+1}`}static studyId(){return u(H)}}const G="mtp_wpt_upc";class X extends v{constructor(t,e,s,r,i){super(t,e,s,G,r,i)}pointsCount(){return 3}static createProperties(t){return super._createPropertiesFromMtpStudyShortIdAndState(G,t)}static getTooltipText(t){return`Up Wave C: Select Point ${(t?t._points.length:0)+1}`}
static studyId(){return u(G)}}},44004:(t,e,s)=>{s.d(e,{LineToolRegressionTrend:()=>S});var r=s(650151),i=s(732149),n=s(827523),o=s(526075),a=s(817724),l=s(311862),u=s(31712),d=s(389137),c=s(853965);const p=(0,n.studyIdString)("RegressionTrend","tv-basicstudies");function h(t){return void 0!==t.startPrice&&void 0!==t.endPrice}function y(t,e,s,r){return e.styles&&(_(e.styles.baseLine),_(e.styles.downLine),_(e.styles.upLine)),e}function _(t){void 0!==t&&void 0!==t.visible&&(t.display=t.visible?15:0,delete t.visible)}class S extends a.StudyLineDataSource{constructor(t,e,i,n,o){i=null!=i?i:(0,r.ensureNotNull)(t.studyMetaInfoRepository().findByIdSync({type:"java",studyId:p}));super(t,i,"linreg_",null!=e?e:S.createProperties(t),n,o),this.version=2,this._trendData=null,Promise.all([s.e(98081),s.e(51583)]).then(s.bind(s,13105)).then((t=>{this._setPaneViews([new t.RegressionTrendPaneView(this,this._model)])}))}formatter(){throw new Error("This method should never be called")}pointsCount(){return 2}clearData(){this._trendData=null,super.clearData()}state(t){var e;const s=super.state(t);return t?{...s,nonseriesdata:null!==(e=this._trendData)&&void 0!==e?e:void 0}:s}restoreData(t){var e;super.restoreData(t),this._trendData=null!==(e=t.nonseriesdata)&&void 0!==e?e:null}startIndex(){if(null===this._trendData||null===this._indexes)return null;const t=this._indexes[this._trendData.startIndex];return t!==i.INVALID_TIME_POINT_INDEX?t:null}endIndex(){if(null===this._trendData||null===this._indexes)return null;const t=this._indexes[this._trendData.endIndex];return t!==i.INVALID_TIME_POINT_INDEX?t:null}baseLine(){return null===this._trendData?null:this._trendData.baseLine}downLine(){return null===this._trendData?null:this._trendData.downLine}upLine(){return null===this._trendData?null:this._trendData.upLine}pearsons(){return null===this._trendData?null:this._trendData.pearsons}recalcStudyIfNeeded(){this._onStudyInputsMayChange()}cloneable(){return!1}static createProperties(t,e){const s=o.StudyMetaInfo.getStudyPropertyRootNameById(p),i=(0,r.ensureNotNull)(t.studyMetaInfoRepository().findByIdSync({type:"java",studyId:p})),n=(0,c.createDefaultsState)(!0,s,[],t.studyVersioning());return this.createRegressionTrendPropertiesFromStudyMetaInfoAndState(i,i,(0,d.merge)((0,d.clone)(n),null!=e?e:{}),t.studyVersioning())}static createRegressionTrendPropertiesFromStudyMetaInfoAndState(t,e,s,r){const i=(0,l.prepareStudyPropertiesForLoadChart)(t,e,s,r,y);return this._configureProperties(i),i}static studyId(){return p}_studyInputs(t){(0,r.assert)(2===t.length,"all the line tool points should be defined");const[e,s]=t;if(e.index===s.index)return null;const i=this._getPointTime(e.index<=s.index?e:s,!0),n=this._getPointTime(s.index>=e.index?s:e,!0);return null===i||null===n?(this._subscribeApplyInputsOnSeriesCompleted(),null):{...this.properties().childs().inputs.state(),"first bar time":1e3*i,"last bar time":1e3*n}}_onDataUpdated(t,e,s){null!==e&&(e.indexes_replace||(this._trendData=e.data),"nochange"!==s&&(this._indexes=s),super._onDataUpdated(t,e,s))}
_isReady(){return null!==this._trendData&&void 0!==this._trendData.startIndex&&void 0!==this._trendData.endIndex&&h(this._trendData.upLine)&&h(this._trendData.baseLine)&&h(this._trendData.downLine)}_updateAnchorsPrice(){if(!this._trendData||(0,d.isNaN)(this._trendData.baseLine.startPrice)||(0,d.isNaN)(this._trendData.baseLine.endPrice))return;const{startPrice:t,endPrice:e}=this._trendData.baseLine;2===this._points.length&&(this._points[0].price=(0,r.ensureDefined)(t),this._points[1].price=(0,r.ensureDefined)(e),this._timePoint[0].price=(0,r.ensureDefined)(t),this._timePoint[1].price=(0,r.ensureDefined)(e))}async _getPropertyDefinitionsViewModelClass(){return(await Promise.all([s.e(88601),s.e(33038),s.e(56894),s.e(68855),s.e(25900),s.e(56386),s.e(47924),s.e(60607)]).then(s.bind(s,422026))).RegressionTrendDefinitionsViewModel}static _configureProperties(t){super._configureProperties(t);const e=t.childs().styles.childs(),s=[e.upLine.childs().linewidth,e.downLine.childs().linewidth,e.baseLine.childs().linewidth];t.addChild("linesWidths",new u.LineToolWidthsProperty(s))}}},224153:(t,e,s)=>{s.d(e,{LineToolVbPFixed:()=>P});var r=s(277973),i=s(650151),n=s(827523),o=s(526075),a=s(817724),l=s(582533),u=s(29399),d=s(964824),c=s(389137),p=s(853965),h=s(311862);const y=(0,n.studyIdString)("VbPFixed","tv-volumebyprice");function _(t,e,s,r){return e.styles&&(S(e.styles.developingPoc),S(e.styles.developingVAHigh),S(e.styles.developingVALow)),e}function S(t){void 0!==t&&void 0!==t.visible&&(t.display=t.visible?15:0,delete t.visible)}class P extends a.StudyLineDataSource{constructor(t,e,s,r,i){const n=s||t.studyMetaInfoRepository().findByIdSync({type:"java",studyId:y});super(t,n,"vbpfixed_",null!=e?e:P.createProperties(t),r,i),this._createPaneViews().then((t=>{this._setPaneViews(t),t.forEach((t=>t.update((0,d.sourceChangeEvent)({sourceId:this.id(),clearData:!0}))))})),this.clearData()}pointsCount(){return 2}boundToSymbol(){return!1}offset(t){return 0}getMinFirstBarIndexForPlot(){return-1/0}calcIsActualSymbol(){this._isActualSymbol=!0,this._isActualCurrency=!0,this._isActualUnit=!0,this.calcIsActualInterval()}cloneable(){return!1}isSynchronizable(){return!1}isPlotVisibleAt(t,e){return(this.properties().childs().styles.childs()[t].childs().display.value()&e)===e}preferredZOrder(){return 0}static createProperties(t,e){const s=o.StudyMetaInfo.getStudyPropertyRootNameById(y),r=(0,i.ensureNotNull)(t.studyMetaInfoRepository().findByIdSync({type:"java",studyId:y})),n=(0,p.createDefaultsState)(!0,s,[],t.studyVersioning());return this.createPropertiesFromStudyMetaInfoAndState(r,r,(0,c.merge)((0,c.clone)(n),null!=e?e:{}),t.studyVersioning())}static createPropertiesFromStudyMetaInfoAndState(t,e,s,r){const i=(0,h.prepareStudyPropertiesForLoadChart)(t,e,s,r,_);return this._configureProperties(i),i}static studyId(){return y}_studyInputs(t){(0,i.assert)(2===t.length,"all the line tool points should be defined")
;const[e,s]=t,r=Math.max(e.index,s.index),n=this._model.mainSeries().bars().lastIndex(),o=this._getPointTime(e.index<=s.index?e:s,!0),a=this._getPointTime(s.index>=e.index?s:e,!0);if(null===o||null===a)return this._subscribeApplyInputsOnSeriesCompleted(),null;return{...this.properties().childs().inputs.state(),first_bar_time:1e3*o,last_bar_time:1e3*a,subscribeRealtime:n===r,mapRightBoundaryToBarStartTime:!!this._needExtendToBarsEnding()||void 0}}_isReady(){return!(0,l.isStudyGraphicsEmpty)(this.graphics())}async _getPropertyDefinitionsViewModelClass(){return(await Promise.all([s.e(88601),s.e(33038),s.e(56894),s.e(68855),s.e(25900),s.e(56386),s.e(47924),s.e(60607)]).then(s.bind(s,762155))).StudyLineDataSourceDefinitionsViewModel}_onDataUpdated(){this._updateAnchors(),this.updateAllViews((0,d.sourceChangeEvent)(this.id())),this._model.updateSource(this)}_updateAnchors(){const t=this._calculateAnchors();if(!t)return;const[{index:e,price:s},{index:r,price:i}]=t;if(this._timePoint.length&&(this._timePoint[0].price=s,this._timePoint[1].price=i),this._points.length){const t=this.model().timeScale(),n=t.indexToTimePoint(e),o=t.indexToTimePoint(e);this._points[0]={index:e,price:s,time:(0,c.isNumber)(n)?new Date(1e3*n):void 0},this._points[1]={index:r,price:i,time:(0,c.isNumber)(o)?new Date(1e3*o):void 0}}}_calculateAnchors(){let t=null,e=null,s=null,i=null;if(this.graphics().hhists().forEach((r=>{r.forEach((r=>{const{priceLow:n,priceHigh:o,firstBarTime:a,lastBarTime:l}=r;(!t||n<t)&&(t=n),(!e||o>e)&&(e=o),(!s||a<s)&&(s=a),(!i||l>i)&&(i=l)}))})),!((0,r.default)(t)||(0,r.default)(e)||(0,r.default)(i)||(0,r.default)(s)))return[{price:e,index:s},{price:t,index:i}]}_updateAnchorsPrice(){const t=this._calculateAnchors();if(!t)return;const[{price:e},{price:s}]=t;this._timePoint.length&&(this._timePoint[0].price=e,this._timePoint[1].price=s),this._points.length&&(this._points[0].price=e,this._points[1].price=s)}async _createPaneViews(){var t;const e=this._metaInfo,r=e.graphics,i=[],n=this._needExtendToBarsEnding();if(r.hhists){const{HHistPaneView:e}=await Promise.all([s.e(98081),s.e(20507)]).then(s.bind(s,670751)),r=null===(t=this.properties().childs().graphics.childs().polygons)||void 0===t?void 0:t.childs();i.push(new e(this,this._model,void 0,null==r?void 0:r.histBoxBg,n))}if(r.horizlines){const{HorizLinePaneView:t}=await Promise.all([s.e(98081),s.e(20507)]).then(s.bind(s,722669));i.push(new t(this,this._model,void 0,n))}return e.plots.length>0&&i.push(this._createStudyPlotPaneView(e.plots[0].id,n)),e.plots.length>1&&i.push(this._createStudyPlotPaneView(e.plots[1].id,n)),e.plots.length>2&&i.push(this._createStudyPlotPaneView(e.plots[2].id,n)),i}_createStudyPlotPaneView(t,e){return new u.StudyPlotPaneView(this,this._model.mainSeries(),this._model,t,e)}_needExtendToBarsEnding(){var t;return void 0!==(null===(t=this.metaInfo().defaults.inputs)||void 0===t?void 0:t.mapRightBoundaryToBarStartTime)}}},342308:(t,e,s)=>{s.d(e,{PaneRendererClockIcon:()=>o});var r=s(315801),i=s(710455);const n=Math.sqrt(3)
;class o extends i.MediaCoordinatesPaneRenderer{constructor(t){super(),this.update(t)}update(t){var e;const s=t.points[0],r=null!==(e=t.points[1])&&void 0!==e?e:t.points[0],i=s.x-r.x,o=s.y-r.y;let a=t.horzMargin;void 0===a&&(a=i>0?10:-25),this._x=s.x+a,this._y=s.y+(0!==o&&Math.abs(i)*n<=Math.abs(o)?-7:o>0?-25:11),this._color=t.color}hitTest(t){return t.x<this._x||t.x>this._x+16||t.y<this._y||t.y>this._y+16?null:new r.HitTestResult(r.HitTarget.Regular)}_drawImpl(t){const e=t.context;e.translate(this._x-.5,this._y-.5),e.beginPath(),e.arc(8,9,6,0,2*Math.PI,!0),e.closePath(),e.moveTo(8,9),e.arc(8.5,5.5,.5,Math.PI,0),e.lineTo(9,10),e.arc(5.5,9.5,.5,.5*Math.PI,1.5*Math.PI),e.closePath(),e.moveTo(1.71,5.93),e.bezierCurveTo(-.61,2.83,3.86,-.76,6.39,2.18),e.bezierCurveTo(4.35,2.67,2.63,4.04,1.71,5.93),e.closePath(),e.moveTo(14.29,5.93),e.bezierCurveTo(16.61,2.83,12.14,-.76,9.61,2.18),e.bezierCurveTo(11.65,2.67,13.37,4.04,14.29,5.93),e.fillStyle=this._color,e.fill()}}},329007:(t,e,s)=>{var r;s.d(e,{Constants:()=>r}),function(t){t.DrawingIconColor="rgba( 170, 170, 170, 1)"}(r||(r={}))}}]);