import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const subjectMarksData = [
        { id: 1, name: "Alice", math: 85, physics: 75, chemistry: 80 },
        { id: 2, name: "Bob", math: 78, physics: 70, chemistry: 85 },
        { id: 3, name: "Charlie", math: 92, physics: 88, chemistry: 90 },
        { id: 4, name: "David", math: 67, physics: 60, chemistry: 72 },
        { id: 5, name: "Emily", math: 80, physics: 78, chemistry: 85 },
        { id: 6, name: "Frank", math: 88, physics: 82, chemistry: 88 },
        { id: 7, name: "Grace", math: 75, physics: 68, chemistry: 78 },
        { id: 8, name: "Hannah", math: 95, physics: 90, chemistry: 92 },
        { id: 9, name: "Ian", math: 70, physics: 65, chemistry: 75 },
        { id: 10, name: "Jessica", math: 82, physics: 75, chemistry: 80 }
    ]



    return (
        <div>
            <LChart width={800} height={400} data={subjectMarksData}>
            <XAxis dataKey="name" />
            <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey={"physics"} stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;