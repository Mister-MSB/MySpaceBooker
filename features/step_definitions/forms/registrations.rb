And(/^I fill the registration form correctly$/) do
  fill_in "booker[email]",                 with: "jimmyfragne@russian.pulp"
  fill_in "booker[password]",              with: "password"
  fill_in "booker[password_confirmation]", with: "password"
  fill_in "booker[firstname]",             with: "JiJi"
  fill_in "booker[lastname]",              with: "FraFra"
  click_on("S'inscrire")
end

And(/^I fill the registration form badly$/) do
  fill_in "booker[password]",              with: "password"
  fill_in "booker[password_confirmation]", with: "password"
  fill_in "booker[firstname]",             with: "JiJi"
  fill_in "booker[lastname]",              with: "FraFra"
  click_on("S'inscrire")
end
