class CreateCheckins < ActiveRecord::Migration[5.0]
  def change
    create_table :checkins do |t|
      t.string :line

      t.timestamps
    end
  end
end
