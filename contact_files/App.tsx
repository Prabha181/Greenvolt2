import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/client/App.tsx");import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;

let prevRefreshReg;
let prevRefreshSig;

if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react-swc can't detect preamble. Something is wrong."
    );
  }

  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("C:/Users/Aditya/Downloads/greenvoit/client/App.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=484605d4"; const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"];
import "/client/global.css";
import { Toaster } from "/client/components/ui/toaster.tsx";
import __vite__cjsImport5_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=484605d4"; const createRoot = __vite__cjsImport5_reactDom_client["createRoot"];
import { Toaster as Sonner } from "/client/components/ui/sonner.tsx";
import { TooltipProvider } from "/client/components/ui/tooltip.tsx";
import { QueryClient, QueryClientProvider } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=484605d4";
import { BrowserRouter, Routes, Route } from "/node_modules/.vite/deps/react-router-dom.js?v=484605d4";
import Home from "/client/pages/Home.tsx";
import About from "/client/pages/About.tsx";
import Vehicles from "/client/pages/Vehicles.tsx";
import WhyChooseUs from "/client/pages/WhyChooseUs.tsx";
import Contact from "/client/pages/Contact.tsx";
import NotFound from "/client/pages/NotFound.tsx";
const queryClient = new QueryClient();
const App = ()=>/*#__PURE__*/ _jsxDEV(QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/ _jsxDEV(TooltipProvider, {
            children: [
                /*#__PURE__*/ _jsxDEV(Toaster, {}, void 0, false, {
                    fileName: "C:/Users/Aditya/Downloads/greenvoit/client/App.tsx",
                    lineNumber: 21,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ _jsxDEV(Sonner, {}, void 0, false, {
                    fileName: "C:/Users/Aditya/Downloads/greenvoit/client/App.tsx",
                    lineNumber: 22,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ _jsxDEV(BrowserRouter, {
                    children: /*#__PURE__*/ _jsxDEV(Routes, {
                        children: [
                            /*#__PURE__*/ _jsxDEV(Route, {
                                path: "/",
                                element: /*#__PURE__*/ _jsxDEV(Home, {}, void 0, false, {
                                    fileName: "C:/Users/Aditya/Downloads/greenvoit/client/App.tsx",
                                    lineNumber: 25,
                                    columnNumber: 36
                                }, void 0)
                            }, void 0, false, {
                                fileName: "C:/Users/Aditya/Downloads/greenvoit/client/App.tsx",
                                lineNumber: 25,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV(Route, {
                                path: "/about",
                                element: /*#__PURE__*/ _jsxDEV(About, {}, void 0, false, {
                                    fileName: "C:/Users/Aditya/Downloads/greenvoit/client/App.tsx",
                                    lineNumber: 26,
                                    columnNumber: 41
                                }, void 0)
                            }, void 0, false, {
                                fileName: "C:/Users/Aditya/Downloads/greenvoit/client/App.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV(Route, {
                                path: "/vehicles",
                                element: /*#__PURE__*/ _jsxDEV(Vehicles, {}, void 0, false, {
                                    fileName: "C:/Users/Aditya/Downloads/greenvoit/client/App.tsx",
                                    lineNumber: 27,
                                    columnNumber: 44
                                }, void 0)
                            }, void 0, false, {
                                fileName: "C:/Users/Aditya/Downloads/greenvoit/client/App.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV(Route, {
                                path: "/why-choose-us",
                                element: /*#__PURE__*/ _jsxDEV(WhyChooseUs, {}, void 0, false, {
                                    fileName: "C:/Users/Aditya/Downloads/greenvoit/client/App.tsx",
                                    lineNumber: 28,
                                    columnNumber: 49
                                }, void 0)
                            }, void 0, false, {
                                fileName: "C:/Users/Aditya/Downloads/greenvoit/client/App.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV(Route, {
                                path: "/contact",
                                element: /*#__PURE__*/ _jsxDEV(Contact, {}, void 0, false, {
                                    fileName: "C:/Users/Aditya/Downloads/greenvoit/client/App.tsx",
                                    lineNumber: 29,
                                    columnNumber: 43
                                }, void 0)
                            }, void 0, false, {
                                fileName: "C:/Users/Aditya/Downloads/greenvoit/client/App.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV(Route, {
                                path: "*",
                                element: /*#__PURE__*/ _jsxDEV(NotFound, {}, void 0, false, {
                                    fileName: "C:/Users/Aditya/Downloads/greenvoit/client/App.tsx",
                                    lineNumber: 31,
                                    columnNumber: 36
                                }, void 0)
                            }, void 0, false, {
                                fileName: "C:/Users/Aditya/Downloads/greenvoit/client/App.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "C:/Users/Aditya/Downloads/greenvoit/client/App.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "C:/Users/Aditya/Downloads/greenvoit/client/App.tsx",
                    lineNumber: 23,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "C:/Users/Aditya/Downloads/greenvoit/client/App.tsx",
            lineNumber: 20,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "C:/Users/Aditya/Downloads/greenvoit/client/App.tsx",
        lineNumber: 19,
        columnNumber: 3
    }, this);
_c = App;
createRoot(document.getElementById("root")).render(/*#__PURE__*/ _jsxDEV(App, {}, void 0, false, {
    fileName: "C:/Users/Aditya/Downloads/greenvoit/client/App.tsx",
    lineNumber: 38,
    columnNumber: 53
}, this));
var _c;
$RefreshReg$(_c, "App");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/Aditya/Downloads/greenvoit/client/App.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/Aditya/Downloads/greenvoit/client/App.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9nbG9iYWwuY3NzXCI7XG5cbmltcG9ydCB7IFRvYXN0ZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3RvYXN0ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVJvb3QgfSBmcm9tIFwicmVhY3QtZG9tL2NsaWVudFwiO1xuaW1wb3J0IHsgVG9hc3RlciBhcyBTb25uZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3Nvbm5lclwiO1xuaW1wb3J0IHsgVG9vbHRpcFByb3ZpZGVyIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS90b29sdGlwXCI7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlcywgUm91dGUgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vcGFnZXMvSG9tZVwiO1xuaW1wb3J0IEFib3V0IGZyb20gXCIuL3BhZ2VzL0Fib3V0XCI7XG5pbXBvcnQgVmVoaWNsZXMgZnJvbSBcIi4vcGFnZXMvVmVoaWNsZXNcIjtcbmltcG9ydCBXaHlDaG9vc2VVcyBmcm9tIFwiLi9wYWdlcy9XaHlDaG9vc2VVc1wiO1xuaW1wb3J0IENvbnRhY3QgZnJvbSBcIi4vcGFnZXMvQ29udGFjdFwiO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gXCIuL3BhZ2VzL05vdEZvdW5kXCI7XG5cbmNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCk7XG5cbmNvbnN0IEFwcCA9ICgpID0+IChcbiAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgPFRvb2x0aXBQcm92aWRlcj5cbiAgICAgIDxUb2FzdGVyIC8+XG4gICAgICA8U29ubmVyIC8+XG4gICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgPFJvdXRlcz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBlbGVtZW50PXs8SG9tZSAvPn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hYm91dFwiIGVsZW1lbnQ9ezxBYm91dCAvPn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi92ZWhpY2xlc1wiIGVsZW1lbnQ9ezxWZWhpY2xlcyAvPn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi93aHktY2hvb3NlLXVzXCIgZWxlbWVudD17PFdoeUNob29zZVVzIC8+fSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NvbnRhY3RcIiBlbGVtZW50PXs8Q29udGFjdCAvPn0gLz5cbiAgICAgICAgICB7LyogQUREIEFMTCBDVVNUT00gUk9VVEVTIEFCT1ZFIFRIRSBDQVRDSC1BTEwgXCIqXCIgUk9VVEUgKi99XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgZWxlbWVudD17PE5vdEZvdW5kIC8+fSAvPlxuICAgICAgICA8L1JvdXRlcz5cbiAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICA8L1Rvb2x0aXBQcm92aWRlcj5cbiAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuKTtcblxuY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikhKS5yZW5kZXIoPEFwcCAvPik7XG4iXSwibmFtZXMiOlsiVG9hc3RlciIsImNyZWF0ZVJvb3QiLCJTb25uZXIiLCJUb29sdGlwUHJvdmlkZXIiLCJRdWVyeUNsaWVudCIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJCcm93c2VyUm91dGVyIiwiUm91dGVzIiwiUm91dGUiLCJIb21lIiwiQWJvdXQiLCJWZWhpY2xlcyIsIldoeUNob29zZVVzIiwiQ29udGFjdCIsIk5vdEZvdW5kIiwicXVlcnlDbGllbnQiLCJBcHAiLCJjbGllbnQiLCJwYXRoIiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxlQUFlO0FBRXRCLFNBQVNBLE9BQU8sUUFBUSwwQkFBMEI7QUFDbEQsU0FBU0MsVUFBVSxRQUFRLG1CQUFtQjtBQUM5QyxTQUFTRCxXQUFXRSxNQUFNLFFBQVEseUJBQXlCO0FBQzNELFNBQVNDLGVBQWUsUUFBUSwwQkFBMEI7QUFDMUQsU0FBU0MsV0FBVyxFQUFFQyxtQkFBbUIsUUFBUSx3QkFBd0I7QUFDekUsU0FBU0MsYUFBYSxFQUFFQyxNQUFNLEVBQUVDLEtBQUssUUFBUSxtQkFBbUI7QUFDaEUsT0FBT0MsVUFBVSxlQUFlO0FBQ2hDLE9BQU9DLFdBQVcsZ0JBQWdCO0FBQ2xDLE9BQU9DLGNBQWMsbUJBQW1CO0FBQ3hDLE9BQU9DLGlCQUFpQixzQkFBc0I7QUFDOUMsT0FBT0MsYUFBYSxrQkFBa0I7QUFDdEMsT0FBT0MsY0FBYyxtQkFBbUI7QUFFeEMsTUFBTUMsY0FBYyxJQUFJWDtBQUV4QixNQUFNWSxNQUFNLGtCQUNWLFFBQUNYO1FBQW9CWSxRQUFRRjtrQkFDM0IsY0FBQSxRQUFDWjs7OEJBQ0MsUUFBQ0g7Ozs7OzhCQUNELFFBQUNFOzs7Ozs4QkFDRCxRQUFDSTs4QkFDQyxjQUFBLFFBQUNDOzswQ0FDQyxRQUFDQztnQ0FBTVUsTUFBSztnQ0FBSUMsdUJBQVMsUUFBQ1Y7Ozs7Ozs7Ozs7MENBQzFCLFFBQUNEO2dDQUFNVSxNQUFLO2dDQUFTQyx1QkFBUyxRQUFDVDs7Ozs7Ozs7OzswQ0FDL0IsUUFBQ0Y7Z0NBQU1VLE1BQUs7Z0NBQVlDLHVCQUFTLFFBQUNSOzs7Ozs7Ozs7OzBDQUNsQyxRQUFDSDtnQ0FBTVUsTUFBSztnQ0FBaUJDLHVCQUFTLFFBQUNQOzs7Ozs7Ozs7OzBDQUN2QyxRQUFDSjtnQ0FBTVUsTUFBSztnQ0FBV0MsdUJBQVMsUUFBQ047Ozs7Ozs7Ozs7MENBRWpDLFFBQUNMO2dDQUFNVSxNQUFLO2dDQUFJQyx1QkFBUyxRQUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FiOUJFO0FBb0JOZixXQUFXbUIsU0FBU0MsY0FBYyxDQUFDLFNBQVVDLE1BQU0sZUFBQyxRQUFDTiJ9