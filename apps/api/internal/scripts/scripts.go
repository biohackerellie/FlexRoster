package scripts

import (
	"os"

	"api/internal/lib/logger"
	"api/internal/ports"
	"api/internal/redis"
	"github.com/spf13/cobra"
)

type Scripts struct {
	classroomRepo ports.ClassroomDBService
	userRepo      ports.UserDBService
	studentRepo   ports.StudentDBService
	logsRepo      ports.LogsDBService
	log           *logger.Logger
	cache         *redis.RClient
}

// rootCmd represents the base command when called without any subcommands
var rootCmd = &cobra.Command{
	Use:   "flexScripts",
	Short: "Scripts for managaing the api",
	Long:  `Resyncs the database with Infinite Campus database, flushes redis, sends logs to db`,
	// Uncomment the following line if your bare application
	// has an action associated with it:
	// Run: func(cmd *cobra.Command, args []string) { },
}

// Execute adds all child commands to the root command and sets flags appropriately.
// This is called by main.main(). It only needs to happen once to the rootCmd.
func Execute() {
	err := rootCmd.Execute()
	if err != nil {
		os.Exit(1)
	}
}

func init() {
	// Here you will define your flags and configuration settings.
	// Cobra supports persistent flags, which, if defined here,
	// will be global for your application.

	// rootCmd.PersistentFlags().StringVar(&cfgFile, "config", "", "config file (default is $HOME/.flexroster.yaml)")

	// Cobra also supports local flags, which will only run
	// when this action is called directly.
	rootCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
