import { GraphPoint, TreeNode } from '@/types'

export const point2TreeNode = (data: GraphPoint[], type: string): TreeNode => {
    const obj = {};
    if (!data) return
    obj.name = data.point.pointName
    obj.value = data.count
    obj.children = data.children
    obj.point = data.point;
    for (let i = 0; i < obj.children.length; i++) {
        let e = obj.children[i];
        e.point.beforePointId = obj.point?.pointId
        e.path = obj.path + '/' + e.point.pointName
        obj.children[i] = point2TreeNode(e, type);
    }
    return obj;
}

export const getTreeSeries = data => [
    {
        type: 'tree',
        data,
        top: '1%',
        left: '7%',
        bottom: '1%',
        right: '20%',
        symbolSize: 14,
        label: {
            position: 'left',
            verticalAlign: 'middle',
            align: 'right',
            fontSize: 15,
        },
        leaves: {
            label: {
                position: 'right',
                verticalAlign: 'middle',
                align: 'left'
            }
        },
        emphasis: {
            focus: 'descendant'
        },
        expandAndCollapse: true,
        animationDuration: 550,
        animationDurationUpdate: 750
    }
]
export const getTreeMapSeries = data => [
    {
        name: '',
        type: 'treemap',
        data: data[0]?.children,
        drillDownIcon: '▶',
        leafDepth: 3,
        squareRatio: 1,
        label: {
            show: true,
            formatter: '{b}',
        },
        upperLabel: {
            show: true,
            height: 30,
        },
        itemStyle: {
            borderColor: '#fff',
        },
        levels: [
            {
                itemStyle: {
                    borderColor: '#777',
                    borderWidth: 0,
                    gapWidth: 1,
                },
                upperLabel: {
                    show: false,
                },
            },
            {
                itemStyle: {
                    borderColor: '#555',
                    borderWidth: 5,
                    gapWidth: 1,
                },
                emphasis: {
                    itemStyle: {
                        borderColor: '#aaa',
                    },
                },
            },
            {
                colorSaturation: [0.35, 0.5],
                itemStyle: {
                    borderWidth: 5,
                    gapWidth: 1,
                    borderColorSaturation: 0.6,
                },
            },
        ],
    }
]
