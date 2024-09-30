import useSWR from "swr";
import useClienteAxios from "./useClienteAxios";
import { configSWR } from "../Constants/GlobalConstants";
import { useGlobal } from "../Providers/GlobalProvider";


export const useUtils = () => {
    const axios = useClienteAxios();
    const ValidarPermisos = (codigoMenu, codigoAccion) => {
        const { accesoActual } = useGlobal();
        const accesoPermitido = accesoActual[0]?.menus.filter(permiso => permiso?.codigo === codigoMenu);
        const validarAcceso = accesoPermitido[0]?.acciones?.filter(accion => accion?.codigo === codigoAccion).length > 0;
        return validarAcceso
    }
    const FetchAllRoles = () => {
        const fetcher = () => axios.get("/v1/rol-funcional").then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR("roles_funcionales", fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }
    const registrarPostulante = async (data) => {
        try {
            const response = await axios.post(`/v1/enunciados`, data);
            return response.data;
        } catch (error) {
            return error.response.data;
        }
    };

    const FetchAllSedes = () => {
        const fetcher = () => axios.get("/v1/sede").then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR("sedes", fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }
    const FetchAllRegiones = () => {
        const fetcher = () => axios.get("/v1/region").then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR("regiones", fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }

    const FetchInstitucionesByRegion = (idRegion) => {
        const fetcher = () => axios.get(`/v1/region/${idRegion}/instituciones`).then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR(`instituciones_region_${idRegion}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }
    const FetchAllInstituciones = () => {
        const fetcher = () => axios.get("/v1/institucion").then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR("instituciones", fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }

    const FetchAllTipoSedes = () => {

        //consulta SWR
        const fetcher = () => axios.get("/v1/tipo-sede").then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR("tipo_sedes", fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }
    const FetchCursosByPlanEstudio = (idCiclo, idPlanEstudio) => {

        //consulta SWR
        const fetcher = () => axios.get(`/v1/plan-estudio/cursos`, { params: { idCiclo, idPlanEstudio } }).then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR(`plan_estudio_cursos_${idCiclo}_${idPlanEstudio}`, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }

    const FetchAllEspecialidades = (id) => {

        //consulta SWR
        const fetcher = () => axios.get(`/v1/especialidades`).then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR("especialidades", fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }

    const FetchProgramasByInstitucion = (id) => {

        //consulta SWR
        const fetcher = () => axios.get(`/v1/institucion/${id}/programas`).then(data => data.data);
        const { data, error, isLoading, mutate } = useSWR("programa_institucion_" + id, fetcher, configSWR);
        return { data, error, isLoading, mutate }
    }
    return { registrarPostulante, FetchInstitucionesByRegion, ValidarPermisos, FetchAllInstituciones, FetchProgramasByInstitucion, FetchAllEspecialidades, FetchCursosByPlanEstudio, FetchAllRegiones, FetchAllRoles, FetchAllSedes, FetchAllTipoSedes }
}