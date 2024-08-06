export const GROUPBY = [{
    id: 'status',
    name: 'Status'
},
{
    id: 'userId',
    name: 'User'
},
{
    id: 'priority',
    name: 'Priority'
},
]


export const SORTBY = [
    {
        id: 'title',
        name: 'Title'
    },
    {
        id: 'priority',
        name: 'Priority'
    },
]

export const PRIORITY_ICON: { [key: number]: string } = {
    0: './icons/No-priority.svg',
    1: './icons/Low-Priority.svg',
    2: './icons/Medium-Priority.svg',
    3: './icons/High-Priority.svg',
    4: './icons/Urgent-Priority-grey.svg',
  };
