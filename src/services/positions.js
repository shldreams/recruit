import request from 'utils/request'

export function fetch(query) {
  return request(`/api/ent/job/v1/list`, {
    query: {
      ...query,
      brief: 0,
      channel: 'www',
      version: '1.0.0',
    },
  })
}

export function updateState(query) {
  return request(`/api/ent/job/v1/up_state`, {
    query: {
      ...query,
      brief: 0,
      channel: 'www',
      version: '1.0.0',
    },
  })
}

export function add({data, webjid}) {
  return request(`/up_job`, {
    method: 'POST',
    query: {
      brief: 0,
      channel: 'www',
      version: '1.0.0',
      webjid,
      ...data,
    },
    body: {
      ...data,
      webjid,
    },
  })
}

export function fetchDetailForEdit(query) {
  return request(`/api/ent/job/v1/add_job_get`, {
    query: {
      ...query,
      brief: 0,
      channel: 'www',
      version: '1.0.0',
    },
  })
}

export function fetchDetail(query) {
  return request(`/api/ent/job/v1/get`, {
    query: {
      ...query,
      brief: 0,
      channel: 'www',
      version: '1.0.0',
    },
  })
}

export function agree(body) {
  return request(`/api/ent/connect/v1/agree`, {
    method: 'GET',
    query: {
      ...body,
      channel: 'www',
      version: '1.0.0',
    },
  })
}

export function disAgree(body) {
  return request(`/api/ent/connect/v1/disagree`, {
    method: 'GET',
    query: {
      ...body,
      channel: 'www',
      version: '1.0.0',
    },
  })
}