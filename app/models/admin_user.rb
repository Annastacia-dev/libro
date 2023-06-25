class AdminUser < User
  before_save :assign_admin_role

  def assign_admin_role
    byebug
    self.role = 'admin'
  end
end
