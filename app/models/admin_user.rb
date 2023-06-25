class AdminUser < User
  before_save :assign_admin_role

  def assign_admin_role
    role = 'admin'
  end
end
