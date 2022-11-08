import ReactECharts from "echarts-for-react";

export default function Echarts(props) {
    const data = {...props};
    return (
        <>
            <ReactECharts option={data.option}></ReactECharts>
        </>
    )
}