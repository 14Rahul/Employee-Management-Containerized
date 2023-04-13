import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL='http://18.221.151.136:8080/employees';

class EmployeeService{

    getAllEmployees()
    {
         return axios.get(EMPLOYEE_BASE_REST_API_URL)
    }

    createEmployee(employee)
    {
        return axios.post(EMPLOYEE_BASE_REST_API_URL,employee)
    }

    getEmployeeById(id)
    {
        return axios.get(EMPLOYEE_BASE_REST_API_URL+"/"+id)
    }

    updateEmployee(id,employee)
    {
        return axios.put(EMPLOYEE_BASE_REST_API_URL+"/"+id,employee)
    }
    deleteEmployee(id)
    {
        return axios.delete(EMPLOYEE_BASE_REST_API_URL+"/"+id)
    }
}

export default new EmployeeService();
