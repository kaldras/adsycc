import Ember from 'ember'

export default Ember.Service.extend({
  ajax: Ember.inject.service(),

  list() {
    return this.get('ajax').request('/api/vault/list')
  },

  details(path) {
    return this.get('ajax').request(`/api/vault/get/${path}`)
  },

  del(path) {
    return this.get('ajax').del(`/api/proxy/vault/${path}`)
  },

  save(path, data) {
    return this.get('ajax').post(`/api/proxy/vault/${path}`, {
      data: JSON.stringify(data)
    })
  }
})
