export class Courses{
    catalog_nbr: string;
    subject: string;
    className: string;
    course_info: Array<Type>;
    catalog_description: string
}

class Type{
    class_nbr: number;
    start_time: string;
    descrlong: string;
    end_time: string;
    campus: string;
    facility_ID: string;
    days: Array<String>;
    instructors: Array<String>;
    class_section: string|number;
    ssr_component: string;
    enrl_stat: string;
    descr: string;
}

