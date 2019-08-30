(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{167:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(172),s=n.n(c),o=n(173),l=n(170),d=n(169);n(34),a.default=function(){var e,a,n,i=Object(t.useState)(null),m=i[0],p=i[1],u=Object(t.useState)(null),y=u[0],f=u[1],h=Object(t.useState)({from:{year:1398,month:2,day:16},to:{year:1398,month:2,day:19}}),g=h[0],D=h[1],b=Object(t.useState)((e=Math.floor(10*Math.random())+9,a=Object(c.getToday)(),n=e===a.day||e===a.day+1?a.day+2:e,Object.assign({},a,{day:n}))),E=b[0],C=b[1];return r.a.createElement(l.a,{title:"Customization"},r.a.createElement("p",{className:"Docs__paragraph"},"This package is designed to be customizable. There are a couple of props to change the default styles according to your preferences. You can customize picker, calendar, and input. For the full list of available props, you can visit ",r.a.createElement(o.a,{className:"Docs__link",to:"/docs/props-list"},"props list"),"."),r.a.createElement("h2",{className:"Docs__titleSecondary"},"Customized Input"),r.a.createElement("p",{className:"Docs__paragraph"},"Placeholder and the formatted value of input can be set directly by you. Moreover, you can set an additional class on the input. If that's not enough, you can render your own input as well. Let's take a look at a few examples:"),r.a.createElement("div",{className:"Docs__sampleContainer"},r.a.createElement(d.a,{language:"javascript"},'\nimport React, { useState } from "react";\nimport "react-persian-calendar-date-picker/lib/DatePicker.css";\nimport DatePicker from "react-persian-calendar-date-picker";\n\nconst App = () => {\n  const [selectedDay, setSelectedDay] = useState(null);\n\n  const formatInputValue = () => {\n    if (!selectedDay) return \'\';\n    return `روز ${selectedDay.day}`;\n  };\n\n  return (\n    <DatePicker\n      selectedDay={selectedDay}\n      onChange={setSelectedDay}\n      inputPlaceholder="انتخاب تاریخ" // placeholder\n      formatInputText={formatInputValue} // format value\n      inputClassName="my-custom-input" // custom class\n    />\n  );\n};\n\nexport default App;\n\n          '),r.a.createElement(s.a,{wrapperClassName:"persianFontWrapper -aboveAll",calendarClassName:"persianFontWrapper",selectedDay:m,onChange:p,inputPlaceholder:"انتخاب تاریخ",formatInputText:function(){return m?"روز "+m.day:""}})),r.a.createElement("p",{className:"Docs__paragraph"},"You can render your own custom input using ",r.a.createElement("code",{className:"custom-code"},"renderInput")," prop:"),r.a.createElement("div",{className:"Docs__sampleContainer"},r.a.createElement(d.a,{language:"javascript"},"\nimport React, { useState } from \"react\";\nimport \"react-persian-calendar-date-picker/lib/DatePicker.css\";\nimport DatePicker from \"react-persian-calendar-date-picker\";\n\nconst App = () => {\n  const [selectedDay, setSelectedDay] = useState(null);\n\n  // render regular HTML input element\n  const renderCustomInput = ({ ref, onFocus, onBlur }) => (\n    <input\n      readOnly\n      ref={ref} // necessary\n      onFocus={onFocus} // necessary\n      onBlur={onBlur} // necessary\n      placeholder=\"اینپوت کاستوم\"\n      value={selectedDay ? selectedDay.day : ''}\n      style={{\n        textAlign: 'center',\n        padding: '1rem 1.5rem',\n        fontSize: '1.5rem',\n        border: '1px solid #9c88ff',\n        borderRadius: '100px',\n        boxShadow: '0 1.5rem 2rem rgba(156, 136, 255, 0.2)',\n        color: '#9c88ff',\n        outline: 'none',\n      }}\n      className=\"my-custom-input-class\" // a styling class\n    />\n  )\n\n  return (\n    <DatePicker\n      selectedDay={selectedDay}\n      onChange={setSelectedDay}\n      renderInput={renderCustomInput} // render a custom input\n    />\n  );\n};\n\nexport default App;\n\n          "),r.a.createElement(s.a,{wrapperClassName:"persianFontWrapper -aboveAll",calendarClassName:"persianFontWrapper",selectedDay:y,onChange:f,renderInput:function(e){var a=e.ref,n=e.onFocus,t=e.onBlur;return r.a.createElement("input",{readOnly:!0,ref:a,onFocus:n,onBlur:t,placeholder:"اینپوت کاستوم",className:"-customPlaceholderColor",value:y?y.day:"",style:{textAlign:"center",padding:"1rem 1.5rem",fontSize:"1.5rem",border:"1px solid #9c88ff",borderRadius:"100px",boxShadow:"0 1.5rem 2rem rgba(156, 136, 255, 0.2)",color:"#9c88ff",outline:"none"}})}})),r.a.createElement("h2",{className:"Docs__titleSecondary"},"Customized Calendar"),r.a.createElement("p",{className:"Docs__paragraph"},"The calendar has a few more props for customization. The most basic ones are ",r.a.createElement("code",{className:"custom-code"},"colorPrimary"),", ",r.a.createElement("code",{className:"custom-code"},"colorPrimaryLight"),". Additional classes' props are available for the calendar itself, selected day, disabled days, range start day, range end day, and more. Here are some examples:"),r.a.createElement("div",{className:"Docs__sampleContainer"},r.a.createElement(d.a,{language:"javascript"},'\nimport React, { useState } from "react";\nimport "react-persian-calendar-date-picker/lib/DatePicker.css";\nimport { Calendar } from "react-persian-calendar-date-picker";\n\nconst App = () => {\n  const defaultFrom = {\n    year: 1398,\n    month: 2,\n    day: 16,\n  };\n  const defaultTo = {\n    year: 1398,\n    month: 2,\n    day: 19,\n  };\n  const defaultValue = {\n    from: defaultFrom,\n    to: defaultTo,\n  };\n  const [selectedDayRange, setSelectedDayRange] = useState(\n    defaultValue\n  );\n\n  return (\n    <Calendar\n      selectedDayRange={selectedDayRange}\n      onChange={setSelectedDayRange}\n      colorPrimary="#0fbcf9" // added this\n      colorPrimaryLight="rgba(75, 207, 250, 0.4)" // and this\n      isDayRange\n    />\n  );\n};\n\nexport default App;\n\n          '),r.a.createElement(c.Calendar,{calendarClassName:"persianFontWrapper",selectedDayRange:g,onChange:D,colorPrimary:"#0fbcf9",colorPrimaryLight:"rgba(75, 207, 250, 0.4)",isDayRange:!0})),r.a.createElement("div",{className:"Docs__sampleContainer"},r.a.createElement(d.a,{language:"javascript"},'\nimport React, { useState } from "react";\nimport "react-persian-calendar-date-picker/lib/DatePicker.css";\nimport { Calendar } from "react-persian-calendar-date-picker";\n\nconst App = () => {\n  const defaultValue = {\n    year: 1398,\n    month: 2,\n    day: 9,\n  };\n  const [selectedDay, setSelectedDay] = useState(defaultValue);\n\n  return (\n    <Calendar\n      selectedDay={selectedDay}\n      onChange={setSelectedDay}\n      colorPrimary="#9c88ff" // added this\n      calendarClassName="custom-calendar" // and this\n      calendarTodayClassName="custom-today-day" // also this\n    />\n  );\n};\n\nexport default App;\n\n          '),r.a.createElement(c.Calendar,{calendarClassName:"persianFontWrapper purple-shadow",selectedDay:E,onChange:C,colorPrimary:"#9c88ff",calendarTodayClassName:"text-orange"})),r.a.createElement("p",{className:"Docs__paragraph"},"Our CSS code for the above example is:"),r.a.createElement(d.a,{language:"css"},"\n.custom-calendar {\n  box-shadow: 0 1em 3em rgba(156, 136, 255,0.2);\n}\n\n.custom-today-day {\n  color: #e67e22 !important;\n  border: 1px solid #e67e22 !important;\n}\n\n.custom-today-day::after {\n  visibility: hidden; /* hide small border under the text */\n}\n        "),r.a.createElement("p",{className:"Docs__paragraph"},r.a.createElement("strong",null,"Note:")," the usage of ",r.a.createElement("code",{className:"custom-code"},"!important")," is because of ",r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",className:"Docs__link",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity"},"overriding the default styles"),"."),r.a.createElement("h2",{className:"Docs__titleSecondary"},"Customized Wrapper"),r.a.createElement("p",{className:"Docs__paragraph"},"All the calendar custom styling props can be passed from ",r.a.createElement("code",{className:"custom-code"},"<DatePicker />"),". Furthermore, there's a",r.a.createElement("code",{className:"custom-code"},"wrapperClassName")," prop for the customization of the picker's container element itself."))}},170:function(e,a,n){"use strict";var t=n(0),r=n.n(t),c=n(169);n(147);a.a=function(e){var a=e.title,n=e.children;return r.a.createElement(c.d,null,r.a.createElement(c.e,{title:a+" - react-persian-calendar-date-picker",keywords:[a]}),r.a.createElement("div",{className:"Docs"},r.a.createElement(c.c,null),r.a.createElement("div",{className:"Docs__content"},r.a.createElement("h1",{className:"Docs__title"},a),n)))}}}]);
//# sourceMappingURL=component---src-pages-docs-customization-js-d375aa1de8e7b58dd314.js.map