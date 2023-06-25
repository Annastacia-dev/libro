class CreateAdminUsers < ActiveRecord::Migration[7.0]
  def up
    create_table :admin_users, id: :uuid do |t|

      t.timestamps
    end
  end

  def down
    drop_table :admin_users
  end
end
