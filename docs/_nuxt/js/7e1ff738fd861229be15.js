(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{350:function(e,n,t){"use strict";t.r(n),n.default="# Basic Pie Chart\n\nPie charts are mainly used to show the proportion of several categories compared with the total. The radians represent the proportion of each category.\n\n## Simple Example\n\nThe config of the pie chart is not completely the same as the line chart and bar chart. There is no need to configure the axis. The name and value of data need to be defined in the series. Let's begin with a basic pie chart:\n\n```js live\noption = {\n  series: [\n    {\n      type: 'pie',\n      data: [\n        {\n          value: 335,\n          name: 'Direct Visit'\n        },\n        {\n          value: 234,\n          name: 'Union Ad'\n        },\n        {\n          value: 1548,\n          name: 'Search Engine'\n        }\n      ]\n    }\n  ]\n};\n```\n\nTo be mentioned, the `value` here does not need to be percentage data. ECharts will proportionately distribute their corresponding radians in the pie chart depending on all the data.\n\n## Customized Pie Chart\n\n### Radius of Pie Chart\n\nThe radius of pie chart can be defined by [`series.radius`](${optionPath}series-pie.radius). Both percent string(`'60%'`) and absolute pixel string(`'200'`) are available. While it is a percent string, it is proportional related to the shorter container(`'div'`) edge.\n\n```js live\noption = {\n  series: [\n    {\n      type: 'pie',\n      data: [\n        {\n          value: 335,\n          name: 'Direct Visit'\n        },\n        {\n          value: 234,\n          name: 'Union Ad'\n        },\n        {\n          value: 1548,\n          name: 'Search Engine'\n        }\n      ],\n      radius: '50%'\n    }\n  ]\n};\n```\n\n## Hide Chart While Data Sum is 0\n\nBy default, if the data sum is 0, the series will divide the shape equally. For instance, if you don't want to show any shape while all 4 series have value equals 0, you could define [`series.stillShowZeroSum`](${optionPath}series-pie.stillShowZeroSum) to `false`.\n\n```js live\noption = {\n  series: [\n    {\n      type: 'pie',\n      stillShowZeroSum: false,\n      data: [\n        {\n          value: 0,\n          name: 'Direct Visit'\n        },\n        {\n          value: 0,\n          name: 'Union Ad'\n        },\n        {\n          value: 0,\n          name: 'Search Engine'\n        }\n      ]\n    }\n  ]\n};\n```\n\nIf you are willing to hide the label as well, define the [`series.label.show`](${optionPath}series-pie.label.show) to `false` as well.\n\n```js live\noption = {\n    series: [{\n        type: 'pie',\n        stillShowZeroSum: false,\n        label: {\n            show: false\n        }\n        data: [{\n            value: 0,\n            name: 'Direct Visit'\n        }, {\n            value: 0,\n            name: 'Union Ad'\n        }, {\n            value: 0,\n            name: 'Search Engine'\n        }]\n    }]\n};\n```\n"}}]);