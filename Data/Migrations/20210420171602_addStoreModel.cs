using Microsoft.EntityFrameworkCore.Migrations;

namespace HandlaLokalt1.Data.Migrations
{
    public partial class addStoreModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                    name: "StoreName",
                    columns: table => new
                    {
                        Id = table.Column<int>(nullable: false),  
                        User = table.Column<int>(nullable: false),
                        StoreName = table.Column<string>(nullable: false),
                        StorePagePicture = table.Column<string>(),
                        StorePageDescription = table.Column<string>(),
                        StorePhoneNumber = table.Column<int>(),
                        StoreEmail = table.Column<string>(nullable: false),
                        StoreAdress = table.Column<string>(nullable: false),
                        BusinessHoursWeekDays = table.Column<string>(),
                        BusinessHoursSaturday = table.Column<string>(),
                        BusinessHoursSunday = table.Column<string>(),
                    },

                constraints: table =>
                {
                    table.PrimaryKey("PK_StoreModels", x => x.Id);
                    table.ForeignKey(
                        name: "FK_StoreOwner",
                        column: x=> x.User,
                        principalTable: "ApplicationUser",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                }
                );  
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
